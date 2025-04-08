import AnimatedContent from '../components/AnimatedContent';

export default function ContactPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Contact Us</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Community Channels</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Discord</span>
                <p className="mt-1">Join our Discord community for real-time support and discussions about LIESOL.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Twitter</span>
                <p className="mt-1">Follow us on Twitter for the latest updates and announcements.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Telegram</span>
                <p className="mt-1">Join our Telegram group for community discussions and news.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Support Options</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Technical Support</span>
                <p className="mt-1">For technical issues, please submit a ticket through our support portal or contact us in Discord.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Business Inquiries</span>
                <p className="mt-1">For partnership or business related questions, please email us at business@liesol.com</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Security Reports</span>
                <p className="mt-1">For security vulnerabilities, please email security@liesol.com</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Office Hours</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Community Support</span>
                <p className="mt-1">24/7 through Discord and Telegram</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Technical Support</span>
                <p className="mt-1">Monday to Friday, 9:00 AM - 5:00 PM UTC</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Business Hours</span>
                <p className="mt-1">Monday to Friday, 9:00 AM - 6:00 PM UTC</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Response Times</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">General Inquiries</span>
                <p className="mt-1">Within 24 hours</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Technical Issues</span>
                <p className="mt-1">Within 4 hours during business hours</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Security Reports</span>
                <p className="mt-1">Immediate attention during business hours</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 