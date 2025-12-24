document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    // In a real site, you'd send this to a server (e.g., via fetch to an API).
});
// সব 'Buy Now' বাটনগুলো সিলেক্ট করা হচ্ছে
document.querySelectorAll('.product button, .buy-now-btn').forEach(button => {
    button.addEventListener('click', function() {
        // বাটনে ক্লিক করলে কী হবে তা এখানে লিখুন
        alert('ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হচ্ছে। আমাদের প্রতিনিধি শীঘ্রই যোগাযোগ করবেন।');
        
        // যদি আপনি চান কোনো নির্দিষ্ট লিঙ্কে পাঠাতে (যেমন WhatsApp):
        // window.location.href = "https://wa.me/yourphonenumber"; 
    });
});
