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

import React from 'react'
import { IconButtonProps } from '@rjsf/utils'

import { ReactComponent as CrossIcon } from '../../../../Assets/Icon/ic-cross.svg'

export const RemoveButton = ({ icon, iconType, registry, uiSchema, ...props }: IconButtonProps) => (
    <button {...props} type="button" className="dc__outline-none-imp p-0 dc__transparent flex cursor" title="Remove">
        <CrossIcon className="icon-dim-16 scn-6" />
    </button>
)
