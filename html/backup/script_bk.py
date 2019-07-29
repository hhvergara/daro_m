import webiopi
 
GPIO = webiopi.GPIO
 
RED   = 22
GREEN = 17
BLUE  = 27
uno = 18
dos = 23
tres = 24
cuatro = 25
 
def setup():
    # Set GPIO to PWM
    GPIO.setFunction(RED  , GPIO.PWM)
    GPIO.setFunction(GREEN, GPIO.PWM)
    GPIO.setFunction(BLUE , GPIO.PWM)
    GPIO.setFunction(uno , GPIO.PWM)
    GPIO.setFunction(dos , GPIO.PWM)
    GPIO.setFunction(tres , GPIO.PWM)
    GPIO.setFunction(cuatro , GPIO.PWM)
 
def destroy():
   # Light off
    GPIO.pwmWrite(RED  , 0)
    GPIO.pwmWrite(GREEN, 0)
    GPIO.pwmWrite(BLUE , 0)
    GPIO.pwmWrite(uno , 0)
    GPIO.pwmWrite(dos , 0)
    GPIO.pwmWrite(tres , 0)
    GPIO.pwmWrite(cuatro , 0)
