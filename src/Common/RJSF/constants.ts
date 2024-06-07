/*
 * Copyright (c) 2024. Devtron Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const PLACEHOLDERS = {
    SELECT: 'Please select an option',
    INPUT: 'Please enter an input',
    OBJECT_KEY: 'Please enter a value for the key',
}

export const DEFAULT_FIELD_TITLE = 'Key not available'

// Using symbol to ensure uniqueness across the fields
export const DO_NOT_SHOW_LABEL = Symbol('Do not show label')

export const ADD_BUTTON_WIDTH = {
    MAX_WIDTH_VALUE: 250,
    MAX_WIDTH_CLASSNAME: 'dc__mxw-250',
}
