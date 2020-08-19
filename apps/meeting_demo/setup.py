# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in meeting_demo/__init__.py
from meeting_demo import __version__ as version

setup(
	name='meeting_demo',
	version=version,
	description='Meeting Demo',
	author='frappe',
	author_email='saroj@bloomstack.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
