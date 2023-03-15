import React, { Component } from 'react'
import EmptyState from './EmptyState/EmptyState'
import notAuthorized from '../Assets/Img/ic-not-authorized.svg'
import Reload from './Reload'
import ErrorScreenNotFound from './ErrorScreenNotFound'
import { ERROR_EMPTY_SCREEN } from './Constants'

export class ErrorScreenManager extends Component<{
    code?: number
    reload?: (...args) => any
    subtitle?: React.ReactChild
    subtitleClass?: string
    reloadClass?: string
}> {
    getMessage() {
        switch (this.props.code) {
            case 400:
                return 'Bad Request'
            case 401:
                return 'Unauthorized'
            case 403:
                return <ErrorScreenNotAuthorized subtitle={this.props.subtitle} subtitleClass={this.props.subtitleClass}/>
            case 404:
                return <ErrorScreenNotFound />
            case 500:
                return 'Internal Server Error'
            case 502:
                return 'Bad Gateway'
            case 503:
                return 'Service Temporarily Unavailable'
            default:
                return <Reload className={this.props.reloadClass} />
        }
    }
    render() {
        let msg = this.getMessage()
        return (
            <div>
                <h1>{msg}</h1>
            </div>
        )
    }
}

export class ErrorScreenNotAuthorized extends Component<{
    subtitle?: React.ReactChild
    title?: string
    subtitleClass?: string
}> {
    render() {
        return (
            <EmptyState className="dc__align-reload-center">
                <EmptyState.Image>
                    <img src={notAuthorized} alt="Not Authorized" />
                </EmptyState.Image>
                <EmptyState.Title>
                    <h3 className="title">{this.props.title ?? ERROR_EMPTY_SCREEN.NOT_AUTHORIZED}</h3>
                </EmptyState.Title>
                <EmptyState.Subtitle className={this.props.subtitleClass}>
                    {this.props.subtitle ?? ERROR_EMPTY_SCREEN.ONLY_FOR_SUPERADMIN}
                </EmptyState.Subtitle>
            </EmptyState>
        )
    }
}