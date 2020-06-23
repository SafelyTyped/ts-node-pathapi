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
     * see {@link sep}.
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
}