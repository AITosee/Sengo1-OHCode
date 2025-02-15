import { ZhHansMsg } from "../language/zh-hans";

export const vision_res_objs = function () {
    return [
        [ZhHansMsg.SENGO1_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
    ];
};

export const vision_custom_objs = function () {
    return [
        [ZhHansMsg.SENGO1_VISION_DATA + "1", "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO1_VISION_DATA + "2", "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO1_VISION_DATA + "3", "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO1_VISION_DATA + "4", "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENGO1_VISION_DATA + "5", "sentry_obj_info_e.kLabel"],
    ];
};

export const vision_qr_objs = function () {
    return [
        [ZhHansMsg.SENGO1_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_WIDTH, "ksentry_obj_info_e.WidthValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
    ];
};

export const vision_color_objs = function () {
    return [
        [ZhHansMsg.SENGO1_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
        [ZhHansMsg.SENGO1_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
        [ZhHansMsg.SENGO1_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
    ];
};
export const vision_line_objs = function () {
    return [
        [ZhHansMsg.SENGO1_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO1_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO1_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO1_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENGO1_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
    ];
};

export const sengo1_vision_blod_objs = function () {
    return [
        [ZhHansMsg.SENGO1_COLOR_BLACK, "color_label_e.kColorBlack"],
        [ZhHansMsg.SENGO1_COLOR_WHITE, "color_label_e.kColorWhite"],
        [ZhHansMsg.SENGO1_COLOR_RED, "color_label_e.kColorRed"],
        [ZhHansMsg.SENGO1_COLOR_GREEN, "color_label_e.kColorGreen"],
        [ZhHansMsg.SENGO1_COLOR_BLUE, "color_label_e.kColorBlue"],
        [ZhHansMsg.SENGO1_COLOR_YELLOW, "color_label_e.kColorYellow"],
    ];
};

export const sengo1_vision_objs = function () {
    return [
        [ZhHansMsg.SENGO1_VISION_VISIONCOLOR, "sengo1_vision_e.kVisionColor"],
        [ZhHansMsg.SENGO1_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
        [ZhHansMsg.SENGO1_VISION_VISIONBALL, "sengo1_vision_e.kVisionBall"],
        [ZhHansMsg.SENGO1_VISION_VISIONLINE, "sengo1_vision_e.kVisionLine"],
        [ZhHansMsg.SENGO1_VISION_VISIONCARD, "sengo1_vision_e.kVisionCard"],
        [ZhHansMsg.SENGO1_VISION_VISIONFACE, "sengo1_vision_e.kVisionFace"],
        [ZhHansMsg.SENGO1_VISION_VISIONBODY, "sengo1_vision_e.kVisionBody"],
        [ZhHansMsg.SENGO1_VISION_VISIONQRCODE, "sengo1_vision_e.kVisionQrCode"],
    ];
};
export const sengo1_vision_prama_support_objs = function () {
    return [
        [ZhHansMsg.SENGO1_VISION_VISIONCOLOR, "sengo1_vision_e.kVisionColor"],
        [ZhHansMsg.SENGO1_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
    ];
};
export const sengo1_vision_card_objs = function () {
    return [
        [ZhHansMsg.SENGO1_CARD_FORWARD, "sengo1_card_label_e.kCardForward"],
        [ZhHansMsg.SENGO1_CARD_LEFT, "sengo1_card_label_e.kCardLeft"],
        [ZhHansMsg.SENGO1_CARD_RIGHT, "sengo1_card_label_e.kCardRight"],
        [ZhHansMsg.SENGO1_CARD_TURN_AROUND, "sengo1_card_label_e.kCardTurnAround"],
        [ZhHansMsg.SENGO1_CARD_PARK, "sengo1_card_label_e.kCardPark"],
    ];
};

export const sengo1_vision_ball_objs = function () {
    return [
        [ZhHansMsg.SENGO1_BALLTABLETENNIS, "Sengo1::kBallTableTennis"],
        [ZhHansMsg.SENGO1_BALLTENNIS, "Sengo1::kBallTennis"],
    ];
};


export const vision_obj_card_dict = function () {
    return {
        "sengo1_vision_e.kVisionBlob": sengo1_vision_blod_objs(),
        "sengo1_vision_e.kVisionCard": sengo1_vision_card_objs(),
        "sengo1_vision_e.kVisionBall": sengo1_vision_ball_objs(),
    };
};

export const Sengo1Begin = {
    init: function () {
        var mode_objs = [
            ["I2C", "i2c0"],
            ["UART", "uart2"],
        ];

        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO1_BEGIN +
                    ZhHansMsg.SENGO1_NAME +
                    ZhHansMsg.SENGO1_PORT,
            )
            .appendField(new Blockly.FieldDropdown(mode_objs), "mode_obj")
            .appendField(ZhHansMsg.SENGO1_ADDR)
            .appendField(
                new Blockly.FieldDropdown([["0x60", "0x60"]]),
                "addr_obj",
            );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENGO1_HELP_INIT_TOOLTIP);
    },
};

// 恢复默认设置
export const Sengo1SetDefault = {
    init: function () {
        this.appendDummyInput().appendField(
            ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_SET_DEFAULT,
        );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENGO1_HELP_SET_DEFAULT);
    },
};

export const Sengo1LedSetColor = {
    init: function () {
        var led_color = [
            "#fff",
            "#000",
            "#f00",
            "#0f0",
            "#ff0",
            "#00f",
            "#f0f",
            "#0ff",
        ];
        var color_detected = new Blockly.FieldColour("#0000ff");
        color_detected.setColours(led_color).setColumns(4);
        var color_undetected = new Blockly.FieldColour("#ff0000");
        color_undetected.setColours(led_color).setColumns(4);

        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO1_SET +
                    ZhHansMsg.SENGO1_NAME +
                    ZhHansMsg.SENGO1_LED_SET_COLOR,
            )
            .appendField(color_detected, "led_color_obj1")
            .appendField(ZhHansMsg.SENGO1_LED_SET_COLOR_NOT)
            .appendField(color_undetected, "led_color_obj2")
            .appendField(ZhHansMsg.SENGO1_LED_SET_LEVEL);
        this.appendValueInput("level").setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENGO1_HELP_LED);
    },
};

// 启用算法
export const Sengo1VisionSetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_SET + ZhHansMsg.SENGO1_NAME)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_ENABLE, "Begin"],
                    [ZhHansMsg.SENGO1_DISABLE, "End"],
                ]),
                "VisionStatus",
            )
            .appendField(
                ZhHansMsg.SENGO1_VISION_CN + ZhHansMsg.SENGO1_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sengo1_vision_objs()),
                "vision_obj",
            );

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo1VisionSetParamNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO1_SET +
                    ZhHansMsg.SENGO1_NAME +
                    ZhHansMsg.SENGO1_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sengo1_vision_prama_support_objs()),
                "vision_obj",
            )
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "num")
            .appendField(ZhHansMsg.SENGO1_SET_PARAMNUM);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo1VisionColorSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO1_SET +
                    ZhHansMsg.SENGO1_NAME +
                    ZhHansMsg.SENGO1_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENGO1_VISION_VISIONCOLOR,
                        "sengo1_vision_e.kVisionColor",
                    ],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField(
            "  " + ZhHansMsg.SENGO1_CENTER + ZhHansMsg.SENGO1_STATE_VALUE_X,
        );
        this.appendValueInput("x").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENGO1_CENTER + ZhHansMsg.SENGO1_STATE_VALUE_Y,
        );
        this.appendValueInput("y").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENGO1_STATE_VALUE_WIDTH);
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENGO1_STATE_VALUE_HEIGHT,
        );
        this.appendValueInput("h").setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo1VisionBlobSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO1_SET +
                    ZhHansMsg.SENGO1_NAME +
                    ZhHansMsg.SENGO1_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField("  " + ZhHansMsg.SENGO1_WEIGHT);
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENGO1_HEIGHT);
        this.appendValueInput("h").setCheck("Number");
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_COLOR)
            .appendField(
                new Blockly.FieldDropdown(sengo1_vision_blod_objs()),
                "lable",
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("#EF5411");
    },
};

export const Sengo1VisionFaceSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO1_SET +
                    ZhHansMsg.SENGO1_NAME +
                    ZhHansMsg.SENGO1_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_VISION_VISIONFACE, "sengo1_vision_e.kVisionFace"],
                ]),
                "vision_obj",
            )
            .appendField("  ")
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_SAVE_DATA, "100"],
                    [ZhHansMsg.SENGO1_DEL_DATA, "0"],
                ]),
                "lable",
            )
            .appendField(ZhHansMsg.SENGO1_SET_ID);
        this.appendValueInput("index").setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo1VisionDetectedCount = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sengo1_vision_objs()),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO1_DETECTED_NUMBER);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
    },
};

export const Sengo1VisionObjColor = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO1_VISION_VISIONCOLOR, "sengo1_vision_e.kVisionColor"],
        ];
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO1_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_color_objs()),
                "vision_res_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_RESULT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};

export const Sengo1VisionObj = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO1_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
            [ZhHansMsg.SENGO1_VISION_VISIONBALL, "sengo1_vision_e.kVisionBall"],
            [ZhHansMsg.SENGO1_VISION_VISIONCARD, "sengo1_vision_e.kVisionCard"],
            [ZhHansMsg.SENGO1_VISION_VISIONBODY, "sengo1_vision_e.kVisionBody"],
            [ZhHansMsg.SENGO1_VISION_VISIONFACE, "sengo1_vision_e.kVisionFace"],
        ];
        this.appendDummyInput().appendField(
            ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN,
        );
        this.appendDummyInput("VisionValue")
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO1_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_res_objs()),
                "vision_res_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_RESULT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};


export const Sengo1VisionObjLine = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO1_VISION_VISIONLINE, "sengo1_vision_e.kVisionLine"],
        ];
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO1_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_line_objs()),
                "vision_res_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_RESULT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};

export const Sengo1VisionObjQr = {
    init: function () {
        var _vision_objs = [
            [
                ZhHansMsg.SENGO1_VISION_VISIONQRCODE +
                    ZhHansMsg.SENGO1_VISION_ENTERPRISE,
                "sengo1_vision_e.kVisionQrCode",
            ],
        ];
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO1_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_qr_objs()),
                "vision_res_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_RESULT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};

export const Sengo1GetQrValue = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO1_VISION_VISIONQRCODE, "sengo1_vision_e.kVisionQrCode"],
        ];
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO1_GET_QRCODEVALUE);
        this.setInputsInline(true);
        this.setOutput(true, String);
        this.setColour("#EAA20A");
    },
};

export const Sengo1DetectedColor = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENGO1_VISION_VISIONCOLOR,
                        "sengo1_vision_e.kVisionColor",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo1_vision_e.kVisionBlob"],
                ),
                "lable",
            );
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};

export const Sengo1DetectedBlob = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_VISION_VISIONBLOB, "sengo1_vision_e.kVisionBlob"],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_DETECTED)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo1_vision_e.kVisionBlob"],
                ),
                "lable",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_BLOCK);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};


export const Sengo1DetectedBall = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_VISION_VISIONBALL, "sengo1_vision_e.kVisionBall"],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo1_vision_e.kVisionBall"],
                ),
                "lable",
            );
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};

export const Sengo1DetectedCard = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO1_NAME + ZhHansMsg.SENGO1_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO1_VISION_VISIONCARD, "sengo1_vision_e.kVisionCard"],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO1_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo1_vision_e.kVisionCard"],
                ),
                "lable",
            );
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setColour("#EAA20A");
    },
};