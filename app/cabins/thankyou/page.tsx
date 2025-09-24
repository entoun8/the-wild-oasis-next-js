import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-primary-900 rounded-2xl border border-primary-700/50 shadow-2xl p-12 space-y-8">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-100 leading-tight">
              Thank you for your reservation!
            </h1>
            <p className="text-lg text-primary-300 leading-relaxed">
              Your booking has been confirmed. We're excited to host you at The Wild Oasis!
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link
              href="/account/reservations"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <span className="text-lg">Manage your reservations</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-primary-800/50">
            <p className="text-sm text-primary-400">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
