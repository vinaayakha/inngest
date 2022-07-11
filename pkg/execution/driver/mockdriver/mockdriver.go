package mockdriver

import (
	"context"
	"sync"

	"github.com/inngest/inngest-cli/inngest"
	"github.com/inngest/inngest-cli/pkg/config/registration"
	"github.com/inngest/inngest-cli/pkg/execution/driver"
	"github.com/inngest/inngest-cli/pkg/execution/state"
)

func init() {
	registration.RegisterDriverConfig(Config{})
}

const RuntimeName = "mock"

type Mock struct {
	RuntimeName string

	// Responses stores the responses that a driver should return.
	Responses map[string]state.DriverResponse
	// Errors stores which steps should return with a driver error, as if
	// the step wasn't executed.
	Errors map[string]error

	// Executed stores which actions were "executed"
	Executed map[string]inngest.ActionVersion

	lock sync.RWMutex
}

// RuntimeType fulfiils the inngest.Runtime interface.
func (m *Mock) RuntimeType() string {
	if m.RuntimeName == "" {
		return RuntimeName
	}
	// Allow mocking other arbitrary runtime names.
	return m.RuntimeName
}

func (m *Mock) Execute(ctx context.Context, s state.State, action inngest.ActionVersion, step inngest.Step) (*state.DriverResponse, error) {
	m.lock.Lock()
	defer m.lock.Unlock()

	if m.Executed == nil {
		m.Executed = map[string]inngest.ActionVersion{}
	}

	m.Executed[step.ID] = action

	response := m.Responses[step.ID]
	err := m.Errors[step.ID]
	return &response, err
}

func (m *Mock) ExecutedLen() int {
	m.lock.RLock()
	defer m.lock.RUnlock()
	return len(m.Executed)
}

// Config represents driver configuration for use when configuring hosted
// services via config.cue
type Config struct{}

// RuntimeName returns the runtime field that should invoke this driver.
func (Config) RuntimeName() string { return RuntimeName }

// DriverName returns the name of this driver
func (Config) DriverName() string { return RuntimeName }

func (c Config) UnmarshalJSON(b []byte) error { return nil }

func (c Config) NewDriver() (driver.Driver, error) {
	return &Mock{}, nil
}
