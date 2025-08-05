const express = require('express');
const { auth } = require('../middleware/auth');
const Course = require('../models/Course');
const User = require('../models/User');

const router = express.Router();

// @route   POST /api/lms/payments/create-order
// @desc    Create payment order
// @access  Private
router.post('/create-order', auth, async (req, res) => {
  try {
    const { courseId, paymentMethod = 'razorpay' } = req.body;

    const course = await Course.findOne({ 
      _id: courseId, 
      isPublished: true 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await User.findById(req.user.id);
    
    // Check if already enrolled
    const existingEnrollment = user.enrolledCourses.find(
      e => e.courseId.toString() === courseId
    );

    if (existingEnrollment) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    // Create order data
    const orderData = {
      amount: course.price * 100, // Convert to paise for Razorpay
      currency: 'INR',
      receipt: `course_${courseId}_${user._id}_${Date.now()}`,
      notes: {
        courseId: courseId,
        userId: user._id.toString(),
        courseTitle: course.title
      }
    };

    if (paymentMethod === 'razorpay') {
      // TODO: Integrate with Razorpay SDK
      // const razorpay = new Razorpay({
      //   key_id: process.env.RAZORPAY_KEY_ID,
      //   key_secret: process.env.RAZORPAY_KEY_SECRET
      // });
      // const order = await razorpay.orders.create(orderData);

      // For now, return mock order
      const mockOrder = {
        id: `order_${Date.now()}`,
        amount: orderData.amount,
        currency: orderData.currency,
        receipt: orderData.receipt,
        status: 'created'
      };

      res.json({
        order: mockOrder,
        key: process.env.RAZORPAY_KEY_ID || 'rzp_test_key'
      });
    } else if (paymentMethod === 'stripe') {
      // TODO: Integrate with Stripe SDK
      // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
      // const paymentIntent = await stripe.paymentIntents.create({
      //   amount: course.price * 100, // Convert to cents
      //   currency: 'inr',
      //   metadata: {
      //     courseId: courseId,
      //     userId: user._id.toString()
      //   }
      // });

      // For now, return mock payment intent
      const mockPaymentIntent = {
        id: `pi_${Date.now()}`,
        amount: orderData.amount,
        currency: 'inr',
        client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
      };

      res.json({
        paymentIntent: mockPaymentIntent
      });
    } else {
      return res.status(400).json({ message: 'Invalid payment method' });
    }

  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/payments/verify
// @desc    Verify payment and enroll student
// @access  Private
router.post('/verify', auth, async (req, res) => {
  try {
    const { paymentId, orderId, signature, courseId, paymentMethod } = req.body;

    const course = await Course.findOne({ 
      _id: courseId, 
      isPublished: true 
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await User.findById(req.user.id);

    // Verify payment
    if (paymentMethod === 'razorpay') {
      // TODO: Verify Razorpay signature
      // const crypto = require('crypto');
      // const expectedSignature = crypto
      //   .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      //   .update(orderId + '|' + paymentId)
      //   .digest('hex');
      
      // if (expectedSignature !== signature) {
      //   return res.status(400).json({ message: 'Invalid payment signature' });
      // }

      // For now, assume payment is successful
      console.log('Payment verified for Razorpay');
    } else if (paymentMethod === 'stripe') {
      // TODO: Verify Stripe payment
      // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
      // const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);
      
      // if (paymentIntent.status !== 'succeeded') {
      //   return res.status(400).json({ message: 'Payment not successful' });
      // }

      // For now, assume payment is successful
      console.log('Payment verified for Stripe');
    }

    // Enroll student in course
    await user.enrollInCourse(courseId);

    // Update course enrollment count
    await course.updateEnrollmentCount();

    // TODO: Save payment record to database
    // const payment = new Payment({
    //   userId: user._id,
    //   courseId: course._id,
    //   amount: course.price,
    //   paymentMethod,
    //   paymentId,
    //   orderId,
    //   status: 'completed'
    // });
    // await payment.save();

    res.json({
      message: 'Payment successful and enrollment completed',
      course: {
        id: course._id,
        title: course.title,
        instructor: course.instructor
      }
    });

  } catch (error) {
    console.error('Verify payment error:', error);
    if (error.message === 'Already enrolled in this course') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/lms/payments/webhook/razorpay
// @desc    Razorpay webhook handler
// @access  Public
router.post('/webhook/razorpay', async (req, res) => {
  try {
    // TODO: Verify webhook signature
    // const crypto = require('crypto');
    // const expectedSignature = crypto
    //   .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    //   .update(JSON.stringify(req.body))
    //   .digest('hex');
    
    // if (expectedSignature !== req.headers['x-razorpay-signature']) {
    //   return res.status(400).json({ message: 'Invalid webhook signature' });
    // }

    const { payload } = req.body;
    const { payment, order } = payload.payment.entity;

    if (payment.status === 'captured') {
      // TODO: Process successful payment
      console.log('Payment successful:', payment.id);
    }

    res.json({ received: true });

  } catch (error) {
    console.error('Razorpay webhook error:', error);
    res.status(500).json({ message: 'Webhook error' });
  }
});

// @route   POST /api/lms/payments/webhook/stripe
// @desc    Stripe webhook handler
// @access  Public
router.post('/webhook/stripe', async (req, res) => {
  try {
    // TODO: Verify Stripe webhook signature
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const sig = req.headers['stripe-signature'];
    // const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    const event = req.body;

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      
      // TODO: Process successful payment
      console.log('Payment successful:', paymentIntent.id);
    }

    res.json({ received: true });

  } catch (error) {
    console.error('Stripe webhook error:', error);
    res.status(500).json({ message: 'Webhook error' });
  }
});

// @route   GET /api/lms/payments/history
// @desc    Get user's payment history
// @access  Private
router.get('/history', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'enrolledCourses.courseId',
        select: 'title price'
      });

    const paymentHistory = user.enrolledCourses.map(enrollment => ({
      courseId: enrollment.courseId._id,
      courseTitle: enrollment.courseId.title,
      amount: enrollment.courseId.price,
      enrolledAt: enrollment.enrolledAt,
      status: 'completed'
    }));

    res.json(paymentHistory);

  } catch (error) {
    console.error('Get payment history error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 