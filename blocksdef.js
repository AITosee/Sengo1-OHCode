// Sentry Enable Disable
const SENTRY_ENABLE = "启用";
const SENTRY_DISABLE = "关闭";

// Sentry White Balance Type
const SENTRY_AWB_AUTO = "自动";
const SENTRY_AWB_LOCK = "锁定";
const SENTRY_AWB_WHITE_LIGHT = "白光";
const SENTRY_AWB_YELLOW_LIGHT = "黄光";

// Sentry State Value Type
const SENTRY_STATE_VALUE = "结果";
const SENTRY_STATE_VALUE_X = "横坐标";
const SENTRY_STATE_VALUE_Y = "纵坐标";
const SENTRY_STATE_VALUE_WIDTH = "宽度";
const SENTRY_STATE_VALUE_HEIGHT = "高度";
const SENTRY_STATE_VALUE_LABEL = "标签";

const SENTRY_STATE_LINE_EX = "终点横坐标";
const SENTRY_STATE_LINE_EY = "终点纵坐标";
const SENTRY_STATE_LINE_SX = "起点横坐标";
const SENTRY_STATE_LINE_SY = "起点纵坐标";
const SENTRY_STATE_LINE_A = "倾斜角度";

const SENTRY_STATE_VALUE_R = "红色分量值";
const SENTRY_STATE_VALUE_G = "绿色分量值";
const SENTRY_STATE_VALUE_B = "蓝色分量值";

// Sentry Color Type
const SENTRY_COLOR_BLACK = "黑色";
const SENTRY_COLOR_WHITE = "白色";
const SENTRY_COLOR_RED = "红色";
const SENTRY_COLOR_GREEN = "绿色";
const SENTRY_COLOR_BLUE = "蓝色";
const SENTRY_COLOR_YELLOW = "黄色";
const SENTRY_COLOR_UNKNOWN = "其他";

// Sentry Vision type
const SENTRY_VISION_VISIONCOLOR = "颜色识别";
const SENTRY_VISION_VISIONBLOB = "色块检测";
const SENTRY_VISION_VISIONBALL = "球体识别";
const SENTRY_VISION_VISIONAPRILTAG = "标签识别";
const SENTRY_VISION_VISIONLINE = "线条检测";
const SENTRY_VISION_VISIONLEARNING = "深度学习";
const SENTRY_VISION_VISIONCARD = "卡片识别";
const SENTRY_VISION_VISIONFACE = "人脸识别";
const SENTRY_VISION_VISIONBODY = "人体检测";
const SENTRY_VISION_VISION20CLASSES = "20类物体";
const SENTRY_VISION_VISIONQRCODE = "二维码";
const SENTRY_VISION_VISIONMOTIONDETECT = "运动物体";
const SENTRY_VISION_VISIONCUSTOM = "自定义";

const SENTRY_BALLTABLETENNIS = "乒乓球";
const SENTRY_BALLTENNIS = "网球";

// Sentry Card Type
const SENTRY_CARD_TRAFFIC = "交通卡片";
const SENTRY_CARD_FORWARD = "前进";
const SENTRY_CARD_LEFT = "左转";
const SENTRY_CARD_RIGHT = "右转";
const SENTRY_CARD_TURN_AROUND = "掉头";
const SENTRY_CARD_PARK = "停车";

// LED color type
const SENTRY_LED_CLOSE = "关闭";
const SENTRY_LED_RED = "红色";
const SENTRY_LED_GREEN = "绿色";
const SENTRY_LED_YELLOW = "黄色";
const SENTRY_LED_BLUE = "蓝色";
const SENTRY_LED_PURPLE = "紫色";
const SENTRY_LED_CYAN = "青色";
const SENTRY_LED_WHITE = "白色";

// Sengo1模块文本
const SENGO1_BEGIN_MESSAGE0 = "初始化  Sengo1  端口 %1 地址 %2";
const SENGO1_LED_SET_COLOR_MESSAGE0 =
  "设置  Sengo1  检测到目标时LED显示 %2 否则 %3 亮度(1~15) %1";

const SENGO1_VISION_SET_STATUS_MESSAGE0 = "设置  Sengo1  %1  算法%2";

const SENGO1_COLORPARAM_MESSAGE0 =
  "设置  Sengo1  %1  中心横坐标 %2 中心纵坐标 %3 宽度 %4 高度 %5";
const SENGO1_BOLDPARAM_MESSAGE0 =
  "设置  Sengo1  %1  最小宽度 %2 最小高度 %3 检测标签 %4";

const SENGO1_FACEPARAM_MESSAGE0 = "设置  Sengo1  %1  %2 编号%3";

const SENGO1_DETECTED_MESSAGE0 = "  Sengo1  %1  返回的结果数量";
const SENGO1_GET_VALUE_MESSAGE0 = "  Sengo1  %1  返回的%2";
const SENGO1_COLORRCGVALUE_MESSAGE0 = "  Sengo1  颜色识别  返回的 %1";
const SENGO1_LINEVALUE_MESSAGE0 = "  Sengo1  线条检测  返回的 %1";
const SENGO1_QRRCGVALUE_MESSAGE0 = "  Sengo1  二维码识别  返回的 %1";
const SENGO1_GET_QRCODEVALUE_MESSAGE0 = "  Sengo1  二维码  返回的结果字符串";
const SENGO1_DETECTEDCOLOR_MESSAGE0 = " Sengo1  颜色识别  识别到 %1";
const SENGO1_DETECTEDBLOB_MESSAGE0 = " Sengo1  色块检测  检测到 %1块";
const SENGO1_DETECTEDCARD_MESSAGE0 = " Sengo1  卡片识别  识别到 %1";
const SENGO1_DETECTEDBALL_MESSAGE0 = " Sengo1  球体识别  识别到 %1";

const Sentry_SetupMode_Color = "#EF5411";
const Sentry_RunMode_Color = "#EAA20A";

const sentry = [
  ["0x60", "0"],
  ["0x61", "1"],
  ["0x62", "2"],
  ["0x63", "3"],
];

function GetVision(v_type) {
  if (v_type == "en") {
    return [
      [SENTRY_VISION_VISIONCOLOR, "sengo1_vision_e.kVisionColor"],
      [SENTRY_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
      [SENTRY_VISION_VISIONBALL, "sengo1_vision_e.kVisionBall"],
      [SENTRY_VISION_VISIONLINE, "sengo1_vision_e.kVisionLine"],
      [SENTRY_VISION_VISIONCARD, "sengo1_vision_e.kVisionCard"],
      [SENTRY_VISION_VISIONFACE, "sengo1_vision_e.kVisionFace"],
      [SENTRY_VISION_VISIONBODY, "sengo1_vision_e.kVisionBody"],
      [SENTRY_VISION_VISIONQRCODE, "sengo1_vision_e.kVisionQrCode"],
    ];
  } else if (v_type == "val") {
    return [
      [SENTRY_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
      [SENTRY_VISION_VISIONBALL, "sengo1_vision_e.kVisionBall"],
      [SENTRY_VISION_VISIONLINE, "sengo1_vision_e.kVisionLine"],
      [SENTRY_VISION_VISIONCARD, "sengo1_vision_e.kVisionCard"],
      [SENTRY_VISION_VISIONFACE, "sengo1_vision_e.kVisionFace"],
      [SENTRY_VISION_VISIONBODY, "sengo1_vision_e.kVisionBody"],
    ];
  }
}

// 初始化 Sengo1
Blockly.Blocks["Sengo1Begin"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "InitType",
          options: [["I2C0", "i2c0"]],
          type: "field_dropdown",
        },
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: SENGO1_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 设置 LED
Blockly.Blocks["Sengo1LedSetColor"] = {
  init: function () {
    this.jsonInit({
      colour: "#EF5411",
      args0: [
        {
          check: "Number",
          type: "input_value",
          name: "level",
        },
        {
          type: "field_dropdown",
          name: "detected_color",
          options: [
            [SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
            [SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
            [SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
            [SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
            [SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
            [SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
            [SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
            [SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
          ],
        },
        {
          type: "field_dropdown",
          name: "undetected_color",
          options: [
            [SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
            [SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
            [SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
            [SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
            [SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
            [SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
            [SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
            [SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
          ],
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: SENGO1_LED_SET_COLOR_MESSAGE0,
      inputsInline: true,
    });
  },
};

// 启用
Blockly.Blocks["Sengo1VisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionStatus",
          options: [
            [SENTRY_ENABLE, "Begin"],
            [SENTRY_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          name: "VisionType",
          options: GetVision("en"),
          type: "field_dropdown",
        },
      ],
      message0: SENGO1_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["Sengo1SetColorParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY_VISION_VISIONCOLOR, "sengo1_vision_e.kVisionColor"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "x",
        },
        {
          check: "Number",
          type: "input_value",
          name: "y",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENGO1_COLORPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1SetBlodParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [[SENTRY_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"]],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          type: "field_dropdown",
          name: "lable",
          options: [
            [SENTRY_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
          ],
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENGO1_BOLDPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1SetFaceParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [[SENTRY_VISION_VISIONFACE, "sengo1_vision_e.kVisionFace"]],
          type: "field_dropdown",
        },
        {
          name: "lable",
          options: [
            ["保存数据并", "1"],
            ["删除数据", "0"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENGO1_FACEPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1Detected"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: GetVision("en"),
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENGO1_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1ColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
            [SENTRY_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
            [SENTRY_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
            [SENTRY_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENGO1_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1GetValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: GetVision("val"),
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENGO1_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1LineValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENGO1_LINEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1QrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENGO1_QRRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1GetQrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: SENGO1_GET_QRCODEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1DetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [SENTRY_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
          ],
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENGO1_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1DetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [SENTRY_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
            [SENTRY_COLOR_UNKNOWN, "sentry_color_label_e.kColorUnkown"],
          ],
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENGO1_DETECTEDBLOB_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1DetectedBall"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [SENTRY_BALLTABLETENNIS, "sentry_class20_label_e.kAirplane"],
            [SENTRY_BALLTENNIS, "sentry_class20_label_e.kBicycle"],
          ],
          type: "field_dropdown",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENGO1_DETECTEDBALL_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sengo1DetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [SENTRY_CARD_FORWARD, "sengo1_card_label_e.kCardForward"],
            [SENTRY_CARD_LEFT, "sengo1_card_label_e.kCardLeft"],
            [SENTRY_CARD_RIGHT, "sengo1_card_label_e.kCardRight"],
            [SENTRY_CARD_TURN_AROUND, "sengo1_card_label_e.kCardTurnAround"],
            [SENTRY_CARD_PARK, "sengo1_card_label_e.kCardPark"],
          ],
          type: "field_dropdown",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENGO1_DETECTEDCARD_MESSAGE0,
    });
  },
};

// 初始化 Sentry
pythonGenerator.forBlock["Sengo1Begin"] = function (block) {
  var sentry = block.getFieldValue("sentry");
  var InitType = block.getFieldValue("InitType");
  var code = "sengo1" + ".begin(" + InitType + ")\n";

  pythonGenerator.definitions_["import_iic"] = "from machine import I2C";
  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";
  pythonGenerator.definitions_["init_IIC"] = "i2c0 = I2C(0,freq=400000)";
  pythonGenerator.definitions_["init_Sengo1" + sentry] =
    "sengo1" + " = Sentry(0x6,0x6" + sentry + ")";

  return code;
};

// 设置 LEDn
pythonGenerator.forBlock["Sentry1LedSetColor"] = function (block) {
  var detected_color = block.getFieldValue("detected_color");
  var undetected_color = block.getFieldValue("undetected_color");
  var level =
    Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) ||
    "1";
  var code =
    "sengo1" +
    ".LedSetColor(" +
    detected_color +
    ", " +
    undetected_color +
    ", " +
    level +
    ")\n";

  Blockly.Python.definitions_["import_Sentry"] = "from Sentry import *";

  return code;
};
// 启用
pythonGenerator.forBlock["Sengo1VisionSetStatus"] = function (block) {
  var VisionStatus = block.getFieldValue("VisionStatus");
  var VisionType = block.getFieldValue("VisionType");
  var code = "sengo1" + ".Vision" + VisionStatus + "(" + VisionType + ")\n";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return code;
};

// Color   参数
pythonGenerator.forBlock["Sengo1SetColorParam"] = function (block) {
  var x =
    pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) || "1";
  var y =
    pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) || "1";
  var w =
    pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || "1";
  var h =
    pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || "1";
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_ATOMIC) ||
    1;
  var code =
    "sengo1" +
    ".SetParam(" +
    "sengo1_vision_e.kVisionColor, [" +
    x +
    ", " +
    y +
    ", " +
    w +
    ", " +
    h +
    ", 0]" +
    ", " +
    objid +
    ")\n";

  return code;
};

// Blod   参数
pythonGenerator.forBlock["Sengo1SetBlodParam"] = function (block) {
  var w =
    pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || "1";
  var h =
    pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || "1";
  var lable = block.getFieldValue("lable");
  var objid = pythonGenerator.valueToCode(
    block,
    "objid",
    pythonGenerator.ORDER_ATOMIC
  );
  var code =
    "sengo1" +
    ".SetParam(" +
    "sengo1_vision_e.kVisionBlob, " +
    "[0, 0, " +
    w +
    ", " +
    h +
    ", " +
    lable +
    "]" +
    ", " +
    objid +
    ")\n";

  return code;
};

// Face   参数
pythonGenerator.forBlock["Sengo1SetFaceParam"] = function (block) {
  var lable = block.getFieldValue("lable");
  var objid = pythonGenerator.valueToCode(
    block,
    "objid",
    pythonGenerator.ORDER_ATOMIC
  );
  var code =
    "sengo1" +
    ".SetParam(" +
    "sengo1_vision_e.kVisionFace, " +
    "[0, 0, 0, 0," +
    lable +
    "]" +
    ", " +
    objid +
    ")\n";

  return code;
};

pythonGenerator.forBlock["Sengo1Detected"] = function (block) {
  var VisionType = block.getFieldValue("VisionType");
  var code =
    "sengo1" + ".GetValue(" + VisionType + ", sentry_obj_info_e.kStatus)";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1ColorRcgValue"] = function (block) {
  var objinfo = block.getFieldValue("objinfo");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";
  var code =
    "sengo1" +
    ".GetValue(sengo1_vision_e.kVisionColor, " +
    objinfo +
    ", " +
    objid +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1GetValue"] = pythonGenerator.forBlock[
  "Sengo1GetValueNomal"
] = function (block) {
  var VisionType = block.getFieldValue("VisionType");
  var objinfo = block.getFieldValue("objinfo");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";
  var code =
    "sengo1" + ".GetValue(" + VisionType + ", " + objinfo + ", " + objid + ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1LineValue"] = function (block) {
  var objinfo = block.getFieldValue("objinfo");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";
  var code =
    "sengo1" +
    ".GetValue(sengo1_vision_e.kVisionLine, " +
    objinfo +
    ", " +
    objid +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1QrCodeValue"] = function (block) {
  var objinfo = block.getFieldValue("objinfo");
  var code =
    "sengo1" + ".GetValue(sengo1_vision_e.kVisionQrCode, " + objinfo + ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1GetQrCodeValue"] = function (block) {
  var code = "sengo1" + ".GetQrCodeValue()";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1DetectedColor"] = function (block) {
  var ColorLabel = block.getFieldValue("ColorLabel");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sengo1" +
    ".GetValue(sengo1_vision_e.kVisionColor, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    ColorLabel +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1DetectedBlob"] = function (block) {
  var ColorLabel = block.getFieldValue("ColorLabel");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sengo1" +
    ".GetValue(sengo1_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    ColorLabel +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1DetectedBall"] = function (block) {
  var card = block.getFieldValue("card");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sengo1" +
    ".GetValue(sengo1_vision_e.kVisionBall, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    card +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo1DetectedCard"] = function (block) {
  var card = block.getFieldValue("card");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sengo1" +
    ".GetValue(sengo1_vision_e.kVisionCard, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    card +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};
