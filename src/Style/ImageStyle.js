/*
 * @Descripttion: 
 * @Date: 2019-09-05 11:18:43
 * @LastEditors: tande
 * @LastEditTime: 2019-09-05 13:05:49
 */
import {
  imageStyleType,
  circleStyleConst
} from './CONST'
import Icon from 'ol/style/Icon'
import CircleStyle from 'ol/style/Circle'
import FillStyleFunction from './FillStyle'
import StrokeStyleFunction from './StrokeStyle'

function iconStyleFunction(iconStyleJson) {
  return new Icon(iconStyleJson)
}

function circleStyleFunction(circleStyleJson) {
  let circleStyleObj = {}
  for (let key in circleStyleJson) {
    if (!circleStyleJson.hasOwnProperty(key)) {
      continue
    }
    switch (key) {
      case circleStyleConst.FILLCOLOR:
        circleStyleObj.fill = FillStyleFunction(circleStyleJson[key])
        break
      case circleStyleConst.STROKE:
        circleStyleObj.stroke = StrokeStyleFunction(circleStyleJson[key])
        break
      case circleStyleConst.RADIUS:
        circleStyleObj.radius = Number(circleStyleJson[key])
    }
  }
  return new CircleStyle(circleStyleJson)
}

function imageStyleFunction(styleSet) {
  let imageStyle = null
  if (styleSet.hasOwnProperty('type') && styleSet.hasOwnProperty('value')) {
    switch (styleSet.type) {
      case imageStyleType.ICON:
        imageStyle = iconStyleFunction(styleSet.value)
        break
      case imageStyleType.CIRCLE:
        imageStyle = circleStyleFunction(styleSet.value)
        break
    }
  }

  return imageStyle
}

export default imageStyleFunction
