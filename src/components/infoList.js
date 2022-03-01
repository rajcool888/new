import React from "react";
import InfoView from "./InfoView";

const InfoList = (props) => {
    console.log(props);
    const renderInfoList = props.infoProperty.map((infoArg) => {
            return(
                <InfoView infoArg={infoArg}></InfoView>
            );
    });
    return (
        <div className="ui celled list">
            Information details {renderInfoList}
        </div>
    );
}

export default InfoList;