import { ARTIFACT_STATUS, STAGE_TYPE } from '../../../constants'
import { DeploymentEnvState } from './DeploymentEnvState'
import { DEPLOYMENT_ENV_TEXT } from './DeploymentEnvState/constants'
import { SequentialCDCardTitleProps } from '../types'
import { ImageTagButton } from '../../../../Common'

const SequentialCDCardTitle = ({
    isLatest,
    isRunningOnParentCD,
    artifactStatus,
    environmentName,
    parentEnvironmentName,
    stageType,
    showLatestTag,
    isVirtualEnvironment,
}: SequentialCDCardTitleProps) => {
    const getDeployedStateText = () => {
        if (isVirtualEnvironment) {
            return DEPLOYMENT_ENV_TEXT.VIRTUAL_ENV
        }
        return DEPLOYMENT_ENV_TEXT.ACTIVE
    }

    if (stageType !== STAGE_TYPE.CD) {
        if (isLatest) {
            return (
                <div className="bcn-0 pb-8 br-4 flex left">
                    <span className="last-deployed-status">Last Run</span>
                </div>
            )
        }
        return null
    }

    if (isLatest || isRunningOnParentCD || Object.values(ARTIFACT_STATUS).includes(artifactStatus) || showLatestTag) {
        return (
            <div className="bcn-0 pb-8 br-4 flex left">
                {isLatest && <DeploymentEnvState envStateText={getDeployedStateText()} envName={environmentName} />}
                {isRunningOnParentCD && (
                    <DeploymentEnvState envStateText={getDeployedStateText()} envName={parentEnvironmentName} />
                )}
                {artifactStatus === ARTIFACT_STATUS.PROGRESSING && (
                    <DeploymentEnvState envStateText={DEPLOYMENT_ENV_TEXT.DEPLOYING} envName={environmentName} />
                )}
                {(artifactStatus === ARTIFACT_STATUS.DEGRADED || artifactStatus === ARTIFACT_STATUS.FAILED) && (
                    <DeploymentEnvState envStateText={DEPLOYMENT_ENV_TEXT.FAILED} envName={environmentName} />
                )}
                {showLatestTag && (
                    // TODO: Remove hard coded text
                    <ImageTagButton
                        text="Latest"
                        isSoftDeleted={false}
                        isEditing={false}
                        tagId={0}
                        softDeleteTags={[]}
                        isSuperAdmin={[]}
                    />
                )}
            </div>
        )
    }

    return null
}

export default SequentialCDCardTitle
