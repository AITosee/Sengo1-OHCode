
from Sentry import SentryBase
from Sentry import LOG_ERROR,LOG_DEBUG
from Sentry import (sentry_obj_info_e,
                        sentry_mode_e,
                        sentry_led_color_e,
                        color_label_e,
                        apriltag_vision_mode_e,
                        class20_label_e)

# sengo1 vision
class sengo1_vision_e:
    kVisionColor = 1
    kVisionBlob = 2
    kVisionBall = 3
    kVisionLine = 4
    kVisionCard = 6
    kVisionBody = 7
    kVisionFace = 8
    kVisionQrCode = 9
    kVisionMaxType= 10
    
# sengo1 card label
class sengo1_card_label_e:
    kCardForward = 1
    kCardLeft = 2
    kCardRight = 3
    kCardTurnAround = 4
    kCardPark = 5

class ball_label_e:
    kBallTableTennis = 1
    kBallTennis = 2

class Sengo1(SentryBase):
    sengo1_DEVICE_ID = 0x06
    def __init__(self, address=0x60, log_level=LOG_ERROR):
        super().__init__(self.sengo1_DEVICE_ID,address,log_level, sengo1_vision_e.kVisionQrCode, sengo1_vision_e.kVisionMaxType)