const envConfigs = {
  development: {
    databaseFile: 'dev.db.sqlite3',
    currentEnv: 'development',
  },
  production: {
    databaseFile: 'prod.db.sqlite3',
    currentEnv: 'production',
  },
  test: {
    databaseFile: '.int.test.db.sqlite3',
    currentEnv: 'test',
  },
  e2e: {
    databaseFile: 'e2e.test.db.sqlite3',
    currentEnv: 'e2e',
  },
} as const
