'use strict';

goog.provide('Blockly.Arduino.MotorDriverBoard');

goog.require('Blockly.Arduino');

//����0��ͼ�ο�ת��ΪC���� Hummerbot��ʼ��
Blockly.Arduino.md_setup = function() {
 //Blockly.Arduino.definitions_['define_Arduino'] = '#include<Arduino.h>'; 
 //Blockly.Arduino.definitions_['define_wire'] = '#include<wire.h>'; 
 //Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include<SoftwareSerial.h>'; 
 //Blockly.Arduino.definitions_['define_ProtocolParser'] = '#include<ProtocolParser.h>'; 
 //Blockly.Arduino.definitions_['define_BluetoothHandle'] = '#include<BluetoothHandle.h>'; 
 //Blockly.Arduino.definitions_['define_KeyMap'] = '#include<KeyMap.h>'; 
// Blockly.Arduino.definitions_['define_debug'] = '#include<debug.h>'; 
 Blockly.Arduino.definitions_['define_Emakefun_MotorDriver'] = '#include<Emakefun_MotorDriver.h>';
 Blockly.Arduino.definitions_['object0'] = 'Emakefun_MotorDriver mMotorDriver = Emakefun_MotorDriver();\n'
 Blockly.Arduino.setups_['setup_md_setup1'] ='\t'+'Serial.begin(9600);\n'
                                        
 var code = '';
 return code;
};
//����һ��ͼ�ο�ת��ΪC���� ֱ���������������û��value��������ת�����������ٶȣ�����,��value��
Blockly.Arduino.md_dcmotor = function() {
 var dropdown_DCPorts = this.getFieldValue('DCPorts');
 var dropdown_DCDirections = this.getFieldValue('DCDirections');
   var value_Speed = Blockly.Arduino.valueToCode(this,'Speed',Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.definitions_['object'+dropdown_DCPorts+''] = 'Emakefun_DCMotor *DCmotor_'+dropdown_DCPorts+' = mMotorDriver.getMotor('+dropdown_DCPorts+');\n'
 Blockly.Arduino.setups_['setup_md_setup2'] ='\t'+'mMotorDriver.begin(50);\n'

 var code = ' DCmotor_'+dropdown_DCPorts+'->setSpeed('+value_Speed+');\n'
 			+'DCmotor_'+dropdown_DCPorts+'->run('+dropdown_DCDirections+');\n';
return code;
};
//���ڶ���ͼ�ο�ת��ΪC���� ֱֹͣ����� ����������û��value��
Blockly.Arduino.md_stopDCmotor = function(){
 var dropdown_DCPorts = this.getFieldValue('DCPorts');
 var code = 'DCmotor_'+dropdown_DCPorts+'->run(RELEASE);\n'
 return code;
};
//��������ͼ�ο�ת��ΪC���� ����������������û��value��������ת�����������ٶȣ�����,��value��
 Blockly.Arduino.md_enmotor = function() {
 var dropdown_ENPorts = this.getFieldValue('ENPorts');
 var dropdown_ENDirections = this.getFieldValue('ENDirections');
   var value_Speed = Blockly.Arduino.valueToCode(this,'Speed',Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.definitions_['object'+dropdown_ENPorts+''] = 'Emakefun_EncoderMotor *encodermotor_'+dropdown_ENPorts+' = mMotorDriver.getEncoderMotor('+dropdown_ENPorts+');\n'
 Blockly.Arduino.setups_['setup_md_setup3'] ='\t'+'mMotorDriver.begin(50);\n'

 var code = ' encodermotor_'+dropdown_ENPorts+'->setSpeed('+value_Speed+');\n'
 			+'encodermotor_'+dropdown_ENPorts+'->run('+dropdown_ENDirections+');\n';
return code;
};
//�����ĸ�ͼ�ο�ת��ΪC���� ֹͣ������ ����������û��value��
Blockly.Arduino.md_stopENmotor = function(){
 var dropdown_ENPorts = this.getFieldValue('ENPorts');
 var code = 'encodermotor_'+dropdown_ENPorts+'->run(RELEASE);\n'
 return code;
};
//�������ͼ�ο�ת��ΪC���� �����������������value��������������ʽ����
Blockly.Arduino.md_stmotor = function(){
 var dropdown_STPorts = this.getFieldValue('STPorts');
 var dropdown_STDirections = this.getFieldValue('STDirections');
  var dropdown_STStyles = this.getFieldValue('STStyles');
 var value_Steps = Blockly.Arduino.valueToCode(this,'Steps',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_md_setup7'] ='\t'+'mMotorDriver.begin(50);\n'
  Blockly.Arduino.definitions_['object'+dropdown_STPorts+''] = 'Emakefun_StepperMotor *steppermotor_'+dropdown_STPorts+' = mMotorDriver.getStepper('+value_Steps+','+dropdown_STPorts+');\n'
 var code = ' steppermotor_'+dropdown_STPorts+'->step('+value_Steps+','+dropdown_STDirections+','+dropdown_STStyles+');\n';
 return code;
};
//��������ͼ�ο�ת��ΪC���� ����RGB����ɫ���������죬�̣������ƣ��ϣ��ף��ڣ�
Blockly.Arduino.md_RGB = function(){
	var dropdown_RGB = this.getFieldValue('RGB');
	var dropdown_RGBCOLOR = this.getFieldValue('RGBCOLOR');
	 Blockly.Arduino.definitions_['object5'] = 'Emakefun_Sensor *rgb = mMotorDriver.getSensor(E_RGB);\n'
 var code = 'rgb->SetRgbColor((E_RGB_INDEX)'+dropdown_RGB+', '+dropdown_RGBCOLOR+');\n';
 return code;
};
//�����߸�ͼ�ο�ת��ΪC���� �������� ����
Blockly.Arduino.md_playSounds = function(){
	var dropdown_Sounds = this.getFieldValue('Sounds');
	Blockly.Arduino.definitions_['object6'] = 'Emakefun_Sensor *buzzer = mMotorDriver.getSensor(E_BUZZER);\n'
 var code = 'buzzer->Sing('+dropdown_Sounds+');\n';
 return code;
};
//���ڰ˸�ͼ�ο�ת��ΪC���� ��������ʼ��
Blockly.Arduino.md_initultrasonic = function(){
 Blockly.Arduino.definitions_['object7'] = 'Emakefun_Sensor *ultrasonic = mMotorDriver.getSensor(E_ULTRASONIC);\n'
 var code = '';
 return code;
};
//���ھŸ�ͼ�ο�ת��ΪC���� ��ȡ����������
Blockly.Arduino.md_readUltrasonicDistance = function(){
 
 var code = 'ultrasonic->GetUltrasonicDistance()';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; //��codeΪ���ʽʱ�ô˷��ط�ʽ
};
//����ʮ��ͼ�ο�ת��ΪC���� ������ճ�ʼ��
Blockly.Arduino.md_initirremote = function(){
	Blockly.Arduino.definitions_['define_KeyMap'] = '#include<KeyMap.h>'; 
	Blockly.Arduino.definitions_['object8'] = 'Emakefun_Sensor *ir = mMotorDriver.getSensor(E_IR);\n'
  var code = '';
 return code;
};
//����ʮһ��ͼ�ο�ת��ΪC���� ����ң�ذ���������������boolean��
Blockly.Arduino.md_irKeyPress = function(){
	var dropdown_Irkeys = this.getFieldValue('Irkeys');
Blockly.Arduino.definitions_['object9'] = 'byte irKeyCode;\n'
 var code = '(E_IR_KEYCODE)ir->mIrRecv->getIrKey(ir->mIrRecv->getCode()) == '+dropdown_Irkeys+'';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

//����ʮ����ͼ�ο�ת��ΪC���� NRF24L01��ʼ��    field��name��ȷ��ʹNUM�����
Blockly.Arduino.md_initnrf24l01 = function(){
	Blockly.Arduino.definitions_['object10'] = 'Emakefun_Sensor *nrf24l01= mMotorDriver.getSensor(E_NRF24L01);\n'
  var code = '';
 return code;
};
//����ʮ����ͼ�ο�ת��ΪC���� NRF24L01�������ݵ�ַvalue ����value
Blockly.Arduino.md_nrf24l01send = function(){
 var value_address = Blockly.Arduino.valueToCode(this,'address',Blockly.Arduino.ORDER_ATOMIC);
var value_data = Blockly.Arduino.valueToCode(this,'data',Blockly.Arduino.ORDER_ATOMIC);
 
 var code = 'nrf24l01->sendNrf24l01((char *)\"'+value_address+'\",'+value_data+');\n';
 return code;
};
//����ʮ�ĸ�ͼ�ο�ת��ΪC���� NRF24L01�������ݵ�ַvalue
Blockly.Arduino.md_nrf24l01receive = function(){
  var value_address = Blockly.Arduino.valueToCode(this,'address',Blockly.Arduino.ORDER_ATOMIC);
 var code = 'int NrfData;\nNrfData = nrf24l01->GetNrf24L01((char *)\"'+value_address+'");\n';
  return code; //��codeΪ���ʽʱ�ô˷��ط�ʽ
};
//����ʮ���ͼ�ο�ת��ΪC���� NRF24L01���ݲ�Ϊ��
Blockly.Arduino.md_NRF24L01isnotnull = function(){
 var code = 'NrfData != NULL';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ����ͼ�ο�ת��ΪC���� ��ȡNRF24L01����
Blockly.Arduino.md_getNRF24L01 = function(){																											
 var code = 'NrfData';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ�߸�ͼ�ο�ת��ΪC���� PS2�ֱ���ʼ��
Blockly.Arduino.md_PS2init = function(){
	Blockly.Arduino.definitions_['object10'] = 'Emakefun_Sensor *ps2x = mMotorDriver.getSensor(E_PS2X);\n'
 var code = 'static int vibrate = 0;\nbyte PSS_X = 0,PSS_Y = 0;\nps2x->mPs2x->read_gamepad(false, vibrate);\n';
 return code;
};
//����ʮ�˸�ͼ�ο�ת��ΪC���� PS2�������£�������
Blockly.Arduino.md_WhichPS2KeyPressed = function(){
 var code = 'ps2x->mPs2x->ButtonDataByte()';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ�Ÿ�ͼ�ο�ת��ΪC���� ����PS2ҡ����ֵ
Blockly.Arduino.md_setps2vibrate = function(){
var code = ' vibrate = ps2x->mPs2x->Analog(PSAB_CROSS);\n';
return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮ��ͼ�ο�ת��ΪC���� ps2�ֱ����� ������value
Blockly.Arduino.md_ps2keypress = function(){
 var dropdown_PS2keys = this.getFieldValue('PS2keys');
 var code = 'ps2x->mPs2x->Button('+dropdown_PS2keys+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮһ��ͼ�ο�ת��ΪC���� ps2�ֱ��ɿ� ������value
Blockly.Arduino.md_ps2keyunpress = function(){
	 var dropdown_PS2keys = this.getFieldValue('PS2keys');
	  var code = 'ps2x->mPs2x->ButtonReleased('+dropdown_PS2keys+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮ����ͼ�ο�ת��ΪC���� ��ȡҡ��ֵ��������
Blockly.Arduino.md_ps2getvibrate = function(){
 var dropdown_Vibrate = this.getFieldValue('Vibrate');
 var code = 'ps2x->Analog('+dropdown_Vibrate+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

//���ڶ�ʮ����ͼ�ο�ת��ΪC���� ��ȡps2״̬
Blockly.Arduino.md_ps2status = function(){
 var code = 'ps2x.read_gamepad(false, 0);\n';
 return code;
};
//���ڶ�ʮ�ĸ�ͼ�ο�ת��ΪC���� ��� �ӿ�����  �Ƕ�value
Blockly.Arduino.md_servo = function(){
	var dropdown_Servoports = this.getFieldValue('Servoports');
	var value_angle = Blockly.Arduino.valueToCode(this,'angle',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_md_setup5'] ='\t'+'mMotorDriver.begin(50);\n'
	Blockly.Arduino.definitions_['object11'] = 'Emakefun_Servo *servo'+dropdown_Servoports+' = mMotorDriver.getServo('+dropdown_Servoports+');\n'
 var code = ' servo'+dropdown_Servoports+'->writeServo('+value_angle+');\n';
 return code;
};