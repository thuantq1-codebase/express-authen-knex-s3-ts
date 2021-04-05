# Sentry

Sentry is a monitoring application for logging.

Sentry will log all error handler for this project.
To enable entry for project execute following step.

- Go [https://sentry.io/signup/](https://sentry.io/signup/) to sign up a sentry account. And then create new project to get ${SENTRY_DNS}.

- Config project with ${SENTRY_DNS} and ${ENV} = [development|test|production]

```bash
cd /path/to/project/src/pre-start/env
vi ${ENV}.env
SENTRY_DNS=${SENTRY_DNS}
```

- Start project with environment ${ENV}

- Go [https://sentry.io/auth/login/](https://sentry.io/auth/login/) to open sentry and monitoring logging.
