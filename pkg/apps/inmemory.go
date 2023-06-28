package apps

import (
	"context"
	"fmt"

	"github.com/google/uuid"
)

func NewInMemoryManager() Manager {
	return &appmgr{apps: []App{}}
}

// InMemoryManager
type appmgr struct {
	apps []App
}

func (a *appmgr) Apps(ctx context.Context) ([]App, error) {
	return a.apps, nil
}

func (a *appmgr) CreateApp(ctx context.Context, app App) error {
	if app.ID == uuid.Nil {
		app.ID = uuid.New()
	}
	a.apps = append(a.apps, app)
	return nil
}

func (a *appmgr) DeleteApp(ctx context.Context, appID uuid.UUID) error {
	for idx, value := range a.apps {
		if value.ID == appID {
			a.apps = append(a.apps[:idx], a.apps[idx+1:]...)
			return nil
		}
	}
	return fmt.Errorf("App ID not found: %s", appID)
}
