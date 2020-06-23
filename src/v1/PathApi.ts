//
// Copyright (c) 2020-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
import path from "path";

/**
 * `PathApi` is a protocol. It is the NodeJS API provided by both
 * `path.posix` and `path.win32`.
 *
 * We use this to help with unit testing.
 *
 * Method descriptions are based on the NodeJS docs.
 *
 * @category PathApi
 */
export interface PathApi {
    /**
     * `delimiter` provides the platform-specific `PATH` delimiter:
     *
     * - `;` for Windows
     * - `:` for POSIX
     */
    delimiter: string;

    /**
     * `sep` provides the platform-specific segment separator:
     *
     * - `\` for Windows
     * - `/` for POSIX
     */
    sep: string;

    /**
     * `basename` returns the last portion of a path, similar to the Unix
     * `basename` command. Trailing directory separators are ignored,
     * see {@link PathApi.sep}.
     *
     * @param path
     * The path to strip.
     * @param ext
     * An optional file extension to strip (if present).
     * @returns
     * The last portion of `path`. If `path` ends in `ext`, that is
     * stripped too.
     */
    basename(path: string, ext?: string): string;

    /**
     * `dirname()` returns the directory name of `path`, similiar to
     * the UNIX `dirname` command. Trailing directory separators are
     * ignored, see {@link PathApi.sep}
     *
     * A `TypeError` is thrown by NodeJS if `path` is not a `string`.
     *
     * @param path
     * The path to strip.
     * @returns
     * Everything but the last portion of `path`.
     */
    dirname(path: string): string;

    /**
     * `extname()` returns the extension of `path`, from the last occurance
     * of the `.` character in the last segment of the path to the end of
     * the string.
     *
     * If there is no `.` in the last segment of the path, or if the only
     * `.` character is the first character of the last segment (ie a
     * UNIX dotfile with no extension), an empty string is returned.
     *
     * @param path
     * The path to strip.
     * @returns
     * - the file extension (starting with a `.`) on success
     * - an empty string otherwise
     */
    extname(path: string): string;

    /**
     * `format()` returns a path string, built from `pathObject`. It is
     * the opposite of {@link PathApi.parse}.
     *
     * Some quirks to know about:
     *
     * - `pathObject.root` is ignored if `pathObject.dir` is provided.
     * - `pathObject.name` and `pathObject.ext` is ignored if
     *   `pathObject.base` is provided.
     *
     * @param pathObject
     * The bits to assemble into a path.
     * @returns
     * The assembled path.
     */
    format(pathObject: path.ParsedPath): string;

    /**
     * `isAbsolute()` determines if `path` is an absolute path or not.
     *
     * An absolute path is a path that starts with a filesystem root
     * segment. Absolute paths are the opposite of relative paths: they
     * don't rely on the current working directory.
     *
     * @param path
     * The path to test.
     * @returns
     * - `true` if `path` is an absolute path.
     * - `false` if `path` is a relative path.
     */
    isAbsolute(path: string): boolean;
}