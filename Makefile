PY ?= .venv/bin/python

.PHONY: setup dev test lint package report

setup:         ## Python tools for tests and the report
	python3 -m venv .venv && $(PY) -m pip install -q -r requirements.txt

dev:           ## play locally: http://localhost:8788/index.html?collector=http://localhost:8788
	$(PY) tools/collector.py 8788

test:          ## full walkthrough, click and random-play tests in headless Chrome
	cd tools && ../$(PY) run_js_tests.py

lint:
	$(PY) -m ruff check analytics tools

package:       ## itch.io upload zip
	$(PY) tools/package.py

report:        ## puzzle funnel + experiment readout (real players, needs .env)
	$(PY) analytics/report.py
