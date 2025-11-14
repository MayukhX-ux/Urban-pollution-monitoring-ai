This project integrates an ESP32-CAM module with gas and flame sensors to provide both visual monitoring and environmental hazard detection.
The system streams live video over Wi-Fi and sends alerts to the Blynk app whenever abnormal gas levels or flame events are detected.


---

⚙ Features

Live video streaming using ESP32-CAM (OV2640)

Air quality monitoring using MQ-135

Flame detection using IR flame sensor

Real-time notifications via Blynk IoT

Wi-Fi connectivity and cloud dashboard

Autonomous safety alerts (sound, push notification, etc.)

Fully standalone embedded system



---

🛠 Hardware Requirements

ESP32-CAM (AI-Thinker module with OV2640 camera)

FTDI Programmer (for flashing)

MQ-135 Gas Sensor

IR Flame Sensor Module

5V Power Supply / USB

Jumper wires

Optional: Buzzer / LED for local alerts



---

🔌 Wiring

ESP32-CAM → FTDI (for flashing)

ESP32-CAM	FTDI

5V	5V
GND	GND
U0R	TX
U0T	RX
GPIO0	GND (only during upload)


MQ-135

MQ-135	ESP32-CAM

VCC	5V
GND	GND
AOUT	GPIO 32 (adjustable)


IR Flame Sensor

Flame Sensor	ESP32-CAM

VCC	3.3V or 5V
GND	GND
D0	GPIO 33 (adjustable)



---

📡 Blynk Setup

1. Create a new device in Blynk Cloud.


2. Copy the following values:

BLYNK_TEMPLATE_ID

BLYNK_TEMPLATE_NAME

BLYNK_AUTH_TOKEN



3. Add widgets:

Live Video Stream widget (URL from ESP32-CAM)

Gauge / Graph widgets for gas values

LED / Notification widget for flame alerts





---

🧪 Software Requirements

Arduino IDE

ESP32 board support (installed using URL):

https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

Required libraries:

ESP32 Camera (esp_camera.h)

WiFi

Blynk (BlynkSimpleEsp32.h)




---

▶ How to Upload

1. Connect FTDI to ESP32-CAM.


2. Hold GPIO0 to GND (flash mode).


3. Select the correct board:

AI Thinker ESP32-CAM



4. Select the correct COM port.


5. Upload the merged code.


6. Remove GPIO0–GND jumper.


7. Press RESET on ESP32-CAM.




---

📲 How It Works

The ESP32-CAM connects to Wi-Fi and starts the camera server.

Sensor data is continuously read in the loop().

MQ-135 provides analog air-quality values.

IR flame sensor detects flame presence.

On gas threshold exceed or flame detection:

Data is sent to Blynk.

Alert notification is triggered.


Video stream URL:

http://<ESP32-CAM-IP>/stream



---

🧩 Applications

Home fire and gas leak monitoring

Industrial safety systems

Smart home automation

IoT surveillance projects

Environmental sensing



---

⚠ Safety Notice

This system is not a replacement for certified fire-safety hardware.
Use it only for educational and prototyping purposes.


---

📘 Future Improvements

Add a buzzer for local alerts

Add temperature + humidity sensors (DHT22)

Add SD card recording on event detection

Add machine-learning smoke/flame recognition
