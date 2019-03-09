/***************************************************************
 *
 *   Bult By : Luke@jcsc.biz for Mr. Todd White
 * 
***************************************************************/
var Application = React.createClass({ displayName: "Application",
  getInitialState: function () {
    return {
      orderDetails: {
        orderNumber: "#A61452B",
        status: "shipped",
        shippingLabel: {
          labelCreated: "true",
          labelCreatedDate: {
            month: "May",
            day: "23",
            year: "2017" } },


        startLocation: {
          address: {
            streetAddress: "123 Start St.",
            city: "Seattle",
            state: "WA" },

          date: {
            month: "May",
            day: "23",
            year: "2017" },

          status: "current",
          type: "start" },

        endLocation: {
          address: {
            streetAddress: "456 End St.",
            city: "New York City",
            state: "NY" },

          date: {
            month: "May",
            day: "28",
            year: "2017" },

          status: "future",
          type: "end" } } };



  },
  render: function () {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col s10 offset-s1 m6 offset-m3" },
      React.createElement("div", { className: "card hoverable" },
      React.createElement("header", { className: "card-title center-align" },
      React.createElement("h5", null, "Tracking Details"),
      React.createElement("h6", null, "Order ", this.state.orderDetails.orderNumber)),

      React.createElement(Image, { status: this.state.orderDetails.status }),
      React.createElement("div", { className: "card-content" },
      React.createElement(Details, {
        status: this.state.orderDetails.status,
        shippingLabel: this.state.orderDetails.shippingLabel,
        startAddress: this.state.orderDetails.startLocation,
        endAddress: this.state.orderDetails.endLocation })))))));







  } });


var Image = React.createClass({ displayName: "Image",
  render: function () {
    var imgSrc, width, classes;
    if (this.props.status === "shipped") {
      width = "55%";
      imgSrc =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/delivery-truck%20(1).svg";
      classes = "col offset-s3";
    } else if (this.props.status === "delivered") {
      imgSrc =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/mailbox.svg";
      width = "45%";
      classes = "col offset-s4";
    } else {
      width = "45%";
      classes = "col offset-s4";
      imgSrc = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/box.svg";
    }
    return (
      React.createElement("div", { className: "row no-margin-bottom" },
      React.createElement("div", { className: classes },
      React.createElement("img", { width: width, src: imgSrc, className: "icon" }))));



  } });


var Location = React.createClass({ displayName: "Location",
  render: function () {
    var status, styling;
    if (this.props.type === "start") {
      if (this.props.status === "shipped") {
        status = "Shipped";
        styling = "row current margin-top";
      } else {
        status = "Shipped";
        styling = "row complete margin-top";
      }
    } else if (this.props.type === "end") {
      if (this.props.status === "shipped") {
        status = "Estimated";
        styling = "row pending no-margin-bottom margin-top";
      } else {
        status = "Delivered";
        styling = "row current no-margin-bottom margin-top";
      }
    }
    return (
      React.createElement("div", { className: styling },
      React.createElement("div", { className: "col s8" },
      React.createElement("div", null,
      this.props.address.streetAddress,
      React.createElement("br", null),
      this.props.address.city, ", ", this.props.address.state)),


      React.createElement("div", { className: "col s4 right-align" },
      React.createElement("date", null,
      status,
      React.createElement("br", null),
      this.props.date.month, " ", this.props.date.day))));




  } });


var NotShipped = React.createClass({ displayName: "NotShipped",
  render: function () {
    return (
      React.createElement("div", { className: "center-align" }, "Not yet shipped. Check back later!"));

  } });


var Details = React.createClass({ displayName: "Details",
  render: function () {
    var shippingDetails;
    if (this.props.status !== "pending") {
      shippingDetails =
      React.createElement(ShippingLabelCreated, {
        labelCreatedDate: this.props.shippingLabel.labelCreatedDate,
        startLocationDetails: this.props.startAddress,
        status: this.props.status,
        endLocationDetails: this.props.endAddress });


    } else {
      shippingDetails = React.createElement(NotShipped, null);
    }
    return React.createElement("div", { className: "container wide" }, shippingDetails);
  } });


var ShippingLabelCreated = React.createClass({ displayName: "ShippingLabelCreated",
  render: function () {
    return (
      React.createElement("div", { className: "row border-left no-margin-bottom" },
      React.createElement("div", { className: "col s12" },
      React.createElement("div", null,
      React.createElement("div", { className: "row complete" },
      React.createElement("div", { className: "col s8" },
      React.createElement("div", null, "Label Created")),

      React.createElement("div", { className: "col s4 right-align" },
      React.createElement("date", null,
      this.props.labelCreatedDate.month, " ",
      this.props.labelCreatedDate.day))),



      React.createElement(Location, {
        address: this.props.startLocationDetails.address,
        date: this.props.startLocationDetails.date,
        status: this.props.status,
        type: this.props.startLocationDetails.type }),

      React.createElement(Location, {
        address: this.props.endLocationDetails.address,
        date: this.props.endLocationDetails.date,
        status: this.props.status,
        type: this.props.endLocationDetails.type })))));





  } });


React.render(React.createElement(Application, null), document.getElementById("app"));