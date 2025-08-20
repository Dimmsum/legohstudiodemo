if (!program) {
    return <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-400"></div>
    </div>;
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center p-8 card border-gold-500">
          <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
            <Check className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold heading-jazz text-gold-400 mb-4">Payment Successful!</h1>
          <p className="text-lg text-white mb-8">Thank you for enrolling in <span className="text-red-500 font-bold">{program.title}</span>.</p>
          <p className="text-gold-400">Redirecting to homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-main-dark min-h-screen font-serif">
      {/* Header */}
      <div className="relative bg-black text-white py-12 mb-8">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <button 
            onClick={() => navigate("/programs")} 
            className="flex items-center text-gold-400 mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </button>
          <h1 className="text-4xl md:text-5xl heading-jazz mb-2 text-gold-400">Enroll in {program.title}</h1>
          <p className="text-xl text-white/80">Complete your registration and secure your spot</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Program Details */}
          <div className="md:col-span-1">
            <div className="card p-6 border-gold-500">
              <h2 className="text-2xl font-bold heading-jazz text-gold-400 mb-4">Program Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  {program.icon && <div className="mt-1">{program.icon}</div>}
                  <div>
                    <h3 className="font-bold text-lg text-gold-400 heading-jazz">{program.title}</h3>
                    <p className="text-white/80 text-sm">{program.description}</p>
                  </div>
                </div>
                <div className="grid gap-3 text-white/70">
                  <div><span className="font-bold text-gold-400">Duration:</span> {program.duration}</div>
                  <div><span className="font-bold text-gold-400">Schedule:</span> {program.schedule}</div>
                  <div><span className="font-bold text-gold-400">Instructor:</span> {program.instructor}</div>
                </div>
              </div>
              <hr className="border-t border-gold-400 my-4" />
              <div className="mb-4">
                <h3 className="font-bold text-gold-400 mb-2">Price</h3>
                <div className="text-3xl font-bold text-white">{program.price}</div>
                <p className="text-sm text-white/60 mt-1">Registration fee included</p>
              </div>
              <div className="bg-black/70 p-4 rounded-xl">
                <h3 className="font-medium text-gold-400 mb-2">What's included:</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  {program.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-gold-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Payment Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="card bg-black/80 p-6 border-gold-500">
                <h2 className="text-2xl font-bold heading-jazz text-gold-400 mb-4">Personal Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* ...existing code for form fields... */}
                </div>
              </div>
              <div className="card bg-black/80 p-6 border-gold-500">
                <h2 className="text-2xl font-bold heading-jazz text-gold-400 mb-4">Payment Information</h2>
                {/* ...existing code for payment fields... */}
                <div className="flex items-center gap-3 bg-gold-400/10 p-3 rounded-lg mt-6">
                  <Shield className="text-gold-400 w-5 h-5" />
                  <p className="text-sm text-gold-400">Your payment information is encrypted and secure</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-gold text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gold-400 mr-2"></span>
                      Processing...
                    </div>
                  ) : (
                    `Complete Enrollment`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );