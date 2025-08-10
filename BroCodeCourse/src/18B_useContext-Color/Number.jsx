import styles from "./ColoredSquares.module.css";
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { ColorContext } from "./ColoredSquares"

function Number(props){

    const bgColorsArray = useContext(ColorContext);
    const evenNumBgColor = bgColorsArray[0];
    const oddNumBgColor = bgColorsArray[1];
    let bgColor = props.num % 2 === 0 ? evenNumBgColor : oddNumBgColor;

    return (
        <div className={styles.number} style={{backgroundColor: bgColor}}>
            <h1>{props.num}</h1>
        </div>
    )
}

export default Number

Number.propTypes = {
    num: PropTypes.number
}