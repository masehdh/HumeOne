const template = function (name, event) {
  let message = `
  <!doctype html>
  <html>

  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <style>
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }

        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 16px !important;
        }

        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important;
        }

        table[class=body] .content {
          padding: 0 !important;
        }

        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }

        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }

        table[class=body] .btn table {
          width: 100% !important;
        }

        table[class=body] .btn a {
          width: 100% !important;
        }

        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }

      @media all {
        * {
          font-family: Montserrat, Helvetica;
          color: #333333;
          line-height: 1.5;
        }

        .ExternalClass {
          width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }

        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }

        .btn-primary table td:hover {
          background-color: #ff933a !important;
          background: linear-gradient(135deg, rgba(230,92,138,1) 0%, rgba(255,204,102,1) 100%) !important;
        }

        .btn-primary a:hover {
          background-color: #ff933a !important;
          background: linear-gradient(135deg, rgba(230,92,138,1) 0%, rgba(255,204,102,1) 100%) !important;
        }
      }
    </style>
  </head>

  <body class=""
    style="background-color: #f6f6f6; font-family: Montserrat, Helvetica; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body"
      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container"
          style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content"
            style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <table class="main"
              style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper"
                  style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0"
                    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top;">
                        <img src="cid:humeone-logo" alt="Humeone Logo" width="50%" height="100%" max-width="100px"
                          border="0"
                          style="border:0; outline:none; text-decoration:none; margin-left: auto; margin-right: auto; display:block; margin-bottom: 20px;">
                        <h3
                          style="font-family: Montserrat, Helvetica; text-transform: uppercase;font-size: 14px; font-weight: 700;color: rgb(230, 126, 115); margin: 0; Margin-bottom: 4px;">
                          Registration Confirmation:</h3>
                        <h2
                          style="font-family: Montserrat, Helvetica; font-size: 24px; font-weight: 700;color: rgb(68, 68, 80); margin: 0; Margin-bottom: 16px;">
                          ${event.name}</h2>

                        <p
                          style="font-family: Montserrat, Helvetica; font-size: 16px; font-weight: normal; color: #333333; margin: 0; Margin-bottom: 16px;">
                          Hi ${name.charAt(0).toUpperCase()}${name.slice(1)}, thank you for registering for this event! We
                          look forward to seeing you ${event.dateTime} at
                          ${event.location}</p>
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary"
                          style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="left"
                                style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top; padding-bottom: 28px;">
                                <table border="0" cellpadding="0" cellspacing="0"
                                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td
                                        style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top; background-color: rgb(34,104,155); border-radius: 5px; text-align: center;">
                                        <a href="www.humeone.com/event-registration/${event.id}" target="_blank"
                                          style="display: inline-block; color: #ffffff; background: linear-gradient(135deg, rgba(230,92,138,1) 0%, rgba(255,204,102,1) 100%); border: solid 1px #ffffff;  border-radius: 4px; box-sizing: border-box; cursor: pointer; text-decoration: none !important; font-size: 14px; font-weight: 900; ; margin: 0; padding: 8px 12px; text-transform: capitalize; border-color: #ffffff">View
                                          Event Details</a>
                                      </td>

                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top;">
                        <p
                          style="font-family: Montserrat, Helvetica; font-size: 12px; font-weight: 500; color: #888888 ;margin: 0; Margin-bottom: 4px; Margin-top: 8px; text-align: center;">
                          ${event.cancellation}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0"
                style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td class="content-block"
                    style="font-family: Montserrat, Helvetica; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">You are
                      receiving this email as a confirmation that you have registered for an event with <a
                        href="https://www.humeone.com/"
                        style="text-decoration: underline; color: #444444 !important; font-size: 12px; text-align: center;">HumeOne</a>.</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
        <td style="font-family: Montserrat, Helvetica; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>

  </html>
  `;
  return message;
};

module.exports = template;
