'use strict';
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

const compileSass = (done) => {
    src(["./src/css/scss/**.scss", "./src/css/scss/**/**.scss"])
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("./src/css/"))
    done();
}


exports.default = () => {
    watch(["./src/css/scss/**.scss", "./src/css/scss/**/**.scss"], compileSass)
}