/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new' : (req, res) => {
    res.view()
  },

  'create' : function(req, res, next) {
    Customer.create(req.params.all(), function( err, customer ) {
      if(err) return next(err)
      res.redirect('/customer/show/' + customer.id)
    })
  },

  'show' : function(req, res) {
    Customer.findOne(req.param('id'), function foundCustomer(err, customer) {
      if(err) return next();

      if(!customer) return next();

      res.view({
        customer : customer
      })
    })
  }

};

