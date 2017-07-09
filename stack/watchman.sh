#!/bin/bash
# This script is currently not used. With the new alpine based image we just
# includes a binary in the git repo.
set -e
set -x

cd /tmp
git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.7.0
./autogen.sh
./configure --without-python
make
make install
rm -rf /tmp/watchman
