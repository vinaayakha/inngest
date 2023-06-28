package apps

import (
	"context"
	"time"

	"github.com/google/uuid"
	"github.com/volatiletech/null/v8"
)

type App struct {
	ID          uuid.UUID      `db:"id" boil:"id" json:"id" toml:"id" yaml:"id"`
	AppName     string         `db:"app_name" boil:"app_name" json:"appName" toml:"appName" yaml:"appName"`
	SDKLanguage string         `db:"sdk_language" boil:"sdk_language" json:"sdkLanguage" toml:"sdkLanguage" yaml:"sdkLanguage"`
	SDKVersion  string         `db:"sdk_version" boil:"sdk_version" json:"sdkVersion" toml:"sdkVersion" yaml:"sdkVersion"`
	Framework   null.String    `db:"framework" boil:"framework" json:"framework,omitempty" toml:"framework" yaml:"framework,omitempty"`
	Metadata    map[string]any `db:"metadata" boil:"metadata" json:"metadata" toml:"metadata" yaml:"metadata"`
	Error       null.String    `db:"error" boil:"error" json:"error,omitempty" toml:"error" yaml:"error,omitempty"`
	Checksum    string         `db:"checksum" boil:"checksum" json:"checksum" toml:"checksum" yaml:"checksum"`
	CreatedAt   time.Time      `db:"created_at" boil:"created_at" json:"createdAt" toml:"createdAt" yaml:"createdAt"`
	URL         null.String    `db:"url" boil:"url" json:"url,omitempty" toml:"url" yaml:"url,omitempty"`
}

type Manager interface {
	// Apps returns all apps
	Apps(ctx context.Context) ([]App, error)
	CreateApp(ctx context.Context, app App) error
	DeleteApp(ctx context.Context, appID uuid.UUID) error
}
