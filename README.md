# Simple k6 Test Automation Framework

This repository contains a minimal multi-layer structure for running [k6](https://k6.io/) performance checks against the [Hoppscotch](https://hoppscotch.io/) landing page.

## Project structure

- `tests/` – Test layer with the entry-point script that defines scenarios and thresholds.
- `src/request_actions/` – Request action layer responsible for combining requests with assertion logic.
- `src/requests/` – Request layer that performs HTTP calls using a reusable client wrapper.
- `.github/workflows/` – GitHub Actions workflow that runs the k6 tests on every push and pull request to the `main` branch.

## Running locally

Ensure [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) is installed and then execute:

```bash
k6 run tests/hoppscotch.test.js
```

Any threshold violations will cause k6 to return a non-zero exit code, which also causes the CI workflow to fail.

## Next steps

- This is the basic, simple k6 automation framework.
- Webpack and additional libraries would be needed to extend capabilities.
- Report robustness would also need additional changes.
- Integration with Grafana for cloud monitoring would also be needed eventually.

The framework itself is the foundation for a scalable performance framework.
