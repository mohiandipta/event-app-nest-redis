export const commonEmailBody = (mailBody: string) => {
  const body = `
<div style="padding-top: 3%; padding-left: 20%; padding-right: 20%; background-color:#eee; background-image:none; background-repeat:repeat; background-position:top left; color:#333; font-family:Helvetica,Arial,sans-serif; line-height:1.25">
    <div class="center">
        <table border="0" cellpadding="0" cellspacing="0" height="90" width="100%" style="padding-top: 2%; background-color:#fff; background-image:none; background-repeat:repeat; background-position:top left">
            <tbody>
                <tr>
                    <td align="center" valign="top">
                        <img src="https://i.ibb.co/B6PqWrX/Microsoft-Teams-image.png" width="194" height="76" alt="Events">
                        <a href="https://shorturl.at/benrX" target="_blank" width="114" height="38" alt="Twitch" class="CToWUd" data-bit="iit"></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <table border="0" cellpadding="0" cellspacing="0" height="1" width="100%" style="background-color:#fff; background-image:none; background-repeat:repeat; background-position:top left">
        <tbody>
            <tr>
                <td align="center" valign="middle" style="background-color:#eeeeee" width="249"></td>
                <td align="center" valign="middle" style="background-color:#4791ff" width="102"></td>
                <td align="center" valign="middle" style="background-color:#eeeeee" width="249"></td>
            </tr>
        </tbody>
    </table>
    <table border="0" cellpadding="1" cellspacing="0" height="0" width="100%" style="background-color:#fff; background-image:none; background-repeat:repeat; background-position:top left">
        <tbody>
            <tr>
                <td align="center" valign="middle">
                    <div style="text-align:left; padding:0 0 20px 0; font-size:14px; line-height:1.5; width:80%; color:#9147ff;">
                        Dear User,
                    </div>
                    <div style="text-align:left; padding:0 0 20px 0; font-size:14px; line-height:1.5; width:80%">
                        Hope this mail finds you well.
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center" valign="middle">
                    <div style="text-align:left; padding:0 0 20px 0; font-size:14px; line-height:1.5; width:80%">
                        ${mailBody}
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center" valign="middle">
                    <div style="text-align:left; padding:0 0 20px 0; font-size:14px; line-height:1.5; width:80%">
                        Congratulations on your successful registration for the event! We are excited to have you on board and look forward to your participation.
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center" valign="middle">
                    <div style="text-align:left; padding:0 0 20px 0; font-size:14px; line-height:1.5; width:80%">
                        Thank you for choosing Events. For any further queries click <a href="#" target="_blank">here</a>.
                    </div>
                </td>
            </tr>
            <tr>
                <td align="center" valign="middle">
                    <div style="text-align:left; padding:0 0 20px 0; font-size:14px; line-height:1.5; width:80%">
                        Thanks,<br>Events Support
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table style="border-collapse:collapse; border-spacing:0; display:table; padding:0; text-align:left; vertical-align:top; width:100%">
        <tbody>
            <tr style="padding:0; text-align:left; vertical-align:top">
                <td style="Margin:0 auto; color:#322f37; font-family:Helvetica,Arial,sans-serif; font-size:16px; font-weight:400; line-height:1.3; margin:0 auto; padding:0; padding-bottom:0!important; padding-left:20px; padding-right:10px; padding-top:0!important; text-align:left; width:270px">
                    <a href="#" style="border:none; clear:both; display:block; float:right; max-width:100%; outline:0; text-align:right; text-decoration:none; width:auto" target="_blank" width="20" height="20" alt="twitch-twitter" class="CToWUd" data-bit="iit"></a>
                </td>
                <td style="Margin:0 auto; color:#322f37; font-family:Helvetica,Arial,sans-serif; font-size:16px; font-weight:400; line-height:1.3; margin:0 auto; padding:0; padding-bottom:0!important; padding-left:10px; padding-right:20px; padding-top:0!important; text-align:left; width:270px">
                    <a href="#" style="border:none; clear:both; display:block; float:left; max-width:100%; outline:0; text-align:left; text-decoration:none; width:auto" target="_blank" width="20" height="20" alt="facebook" class="CToWUd" data-bit="iit"></a>
                </td>
            </tr>
        </tbody>
    </table>
    <p style="color:#322f37; font-family:Helvetica,Arial,Verdana,'Trebuchet MS'; font-size:16px; font-weight:400; line-height:24px; margin:0; margin-top:5px; margin-bottom:10px; padding:0; padding-bottom:10px; text-align:center">
        <small style="color:#706a7c; font-size:14px">© 2024 Events, All Rights Reserved<br>
    </p>
`;

  return body;
};
