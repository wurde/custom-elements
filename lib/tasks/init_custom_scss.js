'use strict'

touch tmp/bootstrap/scss/_custom.scss
grep -q -F '@import \"custom\";' tmp/bootstrap/scss/bootstrap.scss || sed -i '0,/^@import/ s/^@import/@import \"custom\";\\n@import/' tmp/bootstrap/scss/bootstrap.scss
