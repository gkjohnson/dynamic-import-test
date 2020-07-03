# dynamic-import-test

# Notes

## Rollup

- Cannot use dynamic imports with UMD of IIFE formats. Must use cjs or modules _or_ specify that you'd like to inline dynamic chunks.
- Must specify an output directory rather than a file _or_ specify that you'd like to inline dynamic chunks.

## Parcel

- Just works. Outputs files to a directory by default.

## Webpack

- _Almost_ just works. Outputs files to a directory by default but the path used to load the chunks are relative to the window subdomain by default meaning sub dependencies of loaded bundles do not load correctly when they are not next the root html file. `output.publicPath` must be specified to address this but even then it's hardcoded to a specific location.
