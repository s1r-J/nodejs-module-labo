import jsrsasign, { zulutodate } from 'jsrsasign';

const fidoallianceCert = `-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;

const cert = new jsrsasign.X509();
cert.readCertPEM(fidoallianceCert);

const notBefore = cert.getNotBefore();
console.log('RFC5280: ' + notBefore); // YYMMDDHHMMSSZ

const unixTimeSec = jsrsasign.zulutosec(notBefore);
console.log('UNIX（秒）: ' + unixTimeSec);

const unixTimeMsec = jsrsasign.zulutomsec(notBefore);
console.log('UNIX（ミリ秒）: ' + unixTimeMsec);

const date = jsrsasign.zulutodate(notBefore);
console.log('Date型？: ' + (date instanceof Date));

// Error in version 10.5.1
const overflowDateStr = '401231235959Z'; // 2040 Dec 31 23:59:59
const overflowDate = new Date(Date.UTC(2000 + parseInt(overflowDateStr.slice(0, 2)), parseInt(overflowDateStr.slice(2, 4)) - 1, parseInt(overflowDateStr.slice(4, 6)), parseInt(overflowDateStr.slice(6, 8)), parseInt(overflowDateStr.slice(8, 10)), parseInt(overflowDateStr.slice(10, 12))))
console.log(overflowDate.getTime());                 // 2240611199000
console.log(jsrsasign.zulutomsec(overflowDateStr));  // 2240611199000
console.log(jsrsasign.zulutosec(overflowDateStr));   // -2054356097

console.log(Math.floor(jsrsasign.zulutomsec(overflowDateStr)/1000));  // 2240611199

