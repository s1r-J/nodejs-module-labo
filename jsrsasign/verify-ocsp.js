import jsrsasign from "jsrsasign";
import axios from 'axios';

// 証明書A（サーバ証明書） "leaf certificate"とも
const certAStr = `-----BEGIN CERTIFICATE-----
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
-----END CERTIFICATE-----`;

// 証明書B（中間証明書） "chain certificate"とも
const certBStr = `-----BEGIN CERTIFICATE-----
MIIEYTCCA0mgAwIBAgIOSKQC3SeSDaIINJ3RmXswDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNpZ24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMTYwOTIxMDAwMDAwWhcNMjYwOTIxMDAwMDAwWjBiMQswCQYDVQQGEwJCRTEZMBcGA1UEChMQR2xvYmFsU2lnbiBudi1zYTE4MDYGA1UEAxMvR2xvYmFsU2lnbiBFeHRlbmRlZCBWYWxpZGF0aW9uIENBIC0gU0hBMjU2IC0gRzMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCrawNnVNXcEfvFohPBjBkn3BB04mGDPfqO24+lD+SpvkY/Ar5EpAkcJjOfR0iBFYhWN80HzpXYy2tIA7mbXpKu2JpmYdU1xcoQpQK0ujE/we+vEDyjyjmtf76LLqbOfuq3xZbSqUqAY+MOvA67nnpdawvkHgJBFVPnxui45XH4BwTwbtDucx+Mo7EK4mS0Ti+P1NzARxFNCUFM8Wxc32wxXKff6WU4TbqUx/UJm485ttkFqu0Ox4wTUUbn0uuzK7yV3Y986EtGzhKBraMH36MekSYlE473GqHetRi9qbNG5pM++Sa+WjR9E1e0Yws16CGqsmVKwAqg4uc43eBTFUhVAgMBAAGjggEpMIIBJTAOBgNVHQ8BAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU3bPnbagu6MVObs905nU8lBXO6B0wHwYDVR0jBBgwFoAUj/BLf6guRSSuTVD6Y5qL3uLdG7wwPgYIKwYBBQUHAQEEMjAwMC4GCCsGAQUFBzABhiJodHRwOi8vb2NzcDIuZ2xvYmFsc2lnbi5jb20vcm9vdHIzMDYGA1UdHwQvMC0wK6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwRwYDVR0gBEAwPjA8BgRVHSAAMDQwMgYIKwYBBQUHAgEWJmh0dHBzOi8vd3d3Lmdsb2JhbHNpZ24uY29tL3JlcG9zaXRvcnkvMA0GCSqGSIb3DQEBCwUAA4IBAQBVaJzl0J/i0zUV38iMXIQ+Q/yht+JZZ5DW1otGL5OYV0LZ6ZE6xh+WuvWJJ4hrDbhfo6khUEaFtRUnurqzutvVyWgW8msnoP0gtMZO11cwPUMUuUV8iGyIOuIB0flo6G+XbV74SZuR5v5RAgqgGXucYUPZWvv9AfzMMQhRQkr/MO/WR2XSdiBrXHoDL2xk4DmjA4K6iPI+1+qMhyrkUM/2ZEdA8ldqwl8nQDkKS7vq6sUZ5LPVdfpxJZZu5JBj4y7FNFTVW1OMlCUvwt5H8aFgBMLFik9xqK6JFHpYxYmf4t2sLLxN0LlCthJEabvp10ZlOtfu8hL5gCXcxnwGxzSb
-----END CERTIFICATE-----`;

// ルート証明書 "root certificate"とも
const certRootStr = `-----BEGIN CERTIFICATE-----
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

const verifyOcsp = (certificates) => {
  const x509 = certificates.map((c) => {
    return new jsrsasign.X509(c);
  });

  const aiaInfo = x509[0].getExtAIAInfo();
  if (aiaInfo == null) {
  	console.log('ocsp is not found');
  }
	const ocsp = aiaInfo.ocsp;
  if (ocsp == null || ocsp.length === 0) {
  	console.log('ocsp is not found');
  }
	console.log(ocsp);
	const hex = jsrsasign.KJUR.asn1.ocsp.OCSPUtil.getRequestHex(
	  certificates[0],
	  certificates[1],
	  'sha256'
	);
	const parser = new jsrsasign.KJUR.asn1.ocsp.OCSPParser();
	console.log(parser.getOCSPRequest(hex));
	const param = Buffer.from(hex, 'hex').toString('base64');
	const reqUrl = `${ocsp}/${param}`;
	console.log(reqUrl);

	axios.get(reqUrl).then((res) => {
		console.log(res.status);
		const hex = Buffer.from(res.data).toString('hex');
		const parser = new jsrsasign.KJUR.asn1.ocsp.OCSPParser();
		const parsed = parser.getOCSPResponse(hex);
		console.log(parsed); // unauthorized (6)

		// OCSPResponseStatus ::= ENUMERATED {
		// 	 successful(0), --Response has valid confirmations
		// 	 malformedRequest(1), --Illegal confirmation request
		// 	 internalError(2), --Internal error in issuer
		// 	 tryLater (3), --Try again later
		// 	 --(4) is not used
		// 	 sigRequired (5), --Must sign the request
		// 	 unauthorized (6)--Request unauthorized
		// }
	});
};

verifyOcsp([certAStr, certBStr, certRootStr ]);
