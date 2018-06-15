//@ts-check
const gulp = require("gulp");
const ts = require("gulp-typescript");
const path = require("path");

const tsProject = ts.createProject("./tsconfig.json")

gulp
    .task("default", () => {
        return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest(path.resolve("dist")));
    })