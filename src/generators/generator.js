// 初始化 Sentry
export const Sengo1Begin = function (block) {
    var mode = block.getFieldValue("mode_obj");
    var addr = block.getFieldValue("addr_obj");

    pythonGenerator.definitions_["import_Sengo1"] = "from Sengo1 import *";

    if (mode == "uart2") {
        pythonGenerator.definitions_["import_UART"] =
            "from machine import UART";
        pythonGenerator.definitions_["init_UART"] =
            `${mode} = UART(2, baudrate=115200)`;
    } else {
        pythonGenerator.definitions_["import_IIC"] = "from machine import I2C";
        pythonGenerator.definitions_["init_IIC"] =
            `${mode} = I2C(1,freq=400000)\nif ${addr} not in ${mode}.scan():\n    ${mode} = I2C(0,freq=400000)`;
    }

    pythonGenerator.definitions_["init_Sengo2"] = `sengo1  = Sengo1(${addr})`;
    var code = `sengo1.begin(${mode})\n`;
    return code;
};

// 设置 LEDn
export const Sengo1LedSetColor = function (block) {
    var color_dic = {
        "#000000": "sentry_led_color_e.kLedClose",
        "#ff0000": "sentry_led_color_e.kLedRed",
        "#00ff00": "sentry_led_color_e.kLedGreen",
        "#ffff00": "sentry_led_color_e.kLedYellow",
        "#0000ff": "sentry_led_color_e.kLedBlue",
        "#ff00ff": "sentry_led_color_e.kLedPurple",
        "#00ffff": "sentry_led_color_e.kLedCyan",
        "#ffffff": "sentry_led_color_e.kLedWhite",
    };

    var dropdown_led_color_obj1 =
        color_dic[this.getFieldValue("led_color_obj1")];
    var dropdown_led_color_obj2 =
        color_dic[this.getFieldValue("led_color_obj2")];

    var input_level =
        pythonGenerator.valueToCode(
            this,
            "level",
            pythonGenerator.ORDER_ATOMIC,
        ) || 1;

    return `sengo1.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`;
};
// 启用
export const Sengo1VisionSetStatus = function (block) {
    var VisionStatus = block.getFieldValue("VisionStatus");
    var vision_obj = block.getFieldValue("vision_obj");
    var code = "sengo1.Vision" + VisionStatus + "(" + vision_obj + ")\n";

    return code;
};

// Color   参数
export const Sengo1VisionColorSetParam = function (block) {
    var x =
        pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) ||
        "1";
    var y =
        pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) ||
        "1";
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_ATOMIC,
        ) || 1;
    var code =
        "sengo1.SetParam(" +
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
        index +
        ")\n";

    return code;
};

// Blod   参数
export const Sengo1VisionBlobSetParam = function (block) {
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var lable = block.getFieldValue("lable");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_ATOMIC,
        ) || 1;
    var code =
        "sengo1.SetParam(" +
        "sengo1_vision_e.kVisionBlob, " +
        "[0, 0, " +
        w +
        ", " +
        h +
        ", " +
        lable +
        "]" +
        ", " +
        index +
        ")\n";

    return code;
};

// Face   参数
export const Sengo1VisionFaceSetParam = function (block) {
    var lable = block.getFieldValue("lable");
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sengo1.SetParam(" +
        "sengo1_vision_e.kVisionFace, " +
        "[0, 0, 0, 0," +
        lable +
        "]" +
        ", " +
        index +
        ")\n";

    return code;
};

export const Sengo1VisionDetectedCount = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var code = "sengo1.GetValue(" + vision_obj + ", sentry_obj_info_e.kStatus)";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1VisionObjColor = function (block) {
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sengo1.GetValue(sengo1_vision_e.kVisionColor, " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1VisionObj = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sengo1.GetValue(" +
        vision_obj +
        ", " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1VisionObjLine = function (block) {
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sengo1.GetValue(sengo1_vision_e.kVisionLine, " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1VisionObjQr = function (block) {
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sengo1.GetValue(sengo1_vision_e.kVisionQrCode, " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1GetQrValue = function (block) {
    var code = "sengo1.GetQrCodeValue()";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1DetectedColor = function (block) {
    var lable = block.getFieldValue("lable");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sengo1.GetValue(sengo1_vision_e.kVisionColor, sentry_obj_info_e.kLabel," +
        index +
        ") == " +
        lable +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1DetectedBlob = function (block) {
    var lable = block.getFieldValue("lable");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sengo1.GetValue(sengo1_vision_e.kVisionBlob, sentry_obj_info_e.kLabel," +
        index +
        ") == " +
        lable +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1DetectedBall = function (block) {
    var lable = block.getFieldValue("lable");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sengo1.GetValue(sengo1_vision_e.kVisionBall, sentry_obj_info_e.kLabel," +
        index +
        ") == " +
        lable +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo1DetectedCard = function (block) {
    var lable = block.getFieldValue("lable");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sengo1.GetValue(sengo1_vision_e.kVisionCard, sentry_obj_info_e.kLabel," +
        index +
        ") == " +
        lable +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};
