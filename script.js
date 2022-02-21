#!/usr/bin/env node
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Levon Terteryan,OU=Zenify,O=Zeroqode,L=Chisinau,ST=Moldova,C=MD"
