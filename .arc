# Warning! Do Not Edit
# --------------------
# This is a generated file and will be overwritten

@app
jump-nwl

@static
folder public

@http
get /
get /about
get /modules/:type/:module
get /cache
post /cache

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
