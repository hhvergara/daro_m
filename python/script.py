import webiopi
 
GPIO = webiopi.GPIO

GT_Ch1 =  4
GT_Ch2 =  17
GT_Ch3 =  27
GT_Ch4 =  22
BS_Ch1 =  10
BS_Ch2 =  9
BS_Ch3 =  11
BS_Ch4 =  5
DR_Ch1 =  6
DR_Ch2 =  13
DR_Ch3 =  19
DR_Ch4 =  26
VC_Ch1 =  21
VC_Ch2 =  20
VC_Ch3 =  16
VC_Ch4 =  12


 
def setup():
    # Set GPIO to PWM
    GPIO.setFunction(GT_Ch1  , GPIO.PWM)
    GPIO.setFunction(GT_Ch2  , GPIO.PWM)
    GPIO.setFunction(GT_Ch3  , GPIO.PWM)
    GPIO.setFunction(GT_Ch4  , GPIO.PWM)
    GPIO.setFunction(BS_Ch1  , GPIO.PWM)
    GPIO.setFunction(BS_Ch2  , GPIO.PWM)
    GPIO.setFunction(BS_Ch3  , GPIO.PWM)
    GPIO.setFunction(BS_Ch4  , GPIO.PWM)
    GPIO.setFunction(DR_Ch1  , GPIO.PWM)
    GPIO.setFunction(DR_Ch2  , GPIO.PWM)
    GPIO.setFunction(DR_Ch3  , GPIO.PWM)
    GPIO.setFunction(DR_Ch4  , GPIO.PWM)
    GPIO.setFunction(VC_Ch1  , GPIO.PWM)
    GPIO.setFunction(VC_Ch2  , GPIO.PWM)
    GPIO.setFunction(VC_Ch3  , GPIO.PWM)
    GPIO.setFunction(VC_Ch4  , GPIO.PWM)
    
 
def destroy():
   # Light off
    GPIO.pwmWrite(GT_Ch1  , 0)
    GPIO.pwmWrite(GT_Ch2  , 0)
    GPIO.pwmWrite(GT_Ch3  , 0)
    GPIO.pwmWrite(GT_Ch4  , 0)
    GPIO.pwmWrite(BS_Ch1  , 0)
    GPIO.pwmWrite(BS_Ch2  , 0)
    GPIO.pwmWrite(BS_Ch3  , 0)
    GPIO.pwmWrite(BS_Ch4  , 0)
    GPIO.pwmWrite(DR_Ch1  , 0)
    GPIO.pwmWrite(DR_Ch2  , 0)
    GPIO.pwmWrite(DR_Ch3  , 0)
    GPIO.pwmWrite(DR_Ch4  , 0)
    GPIO.pwmWrite(VC_Ch1  , 0)
    GPIO.pwmWrite(VC_Ch2  , 0)
    GPIO.pwmWrite(VC_Ch3  , 0)
    GPIO.pwmWrite(VC_Ch4  , 0)
