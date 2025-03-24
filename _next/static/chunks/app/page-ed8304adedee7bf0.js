(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        1538: function (e, r, t) {
            Promise.resolve().then(t.bind(t, 4437))
        },
        4437: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function () {
                    return x
                }
            });
            var n = t(7437),
                s = t(2265),
                a = t(3145),
                l = t(1268),
                o = t(7411),
                c = t(5217);

            function i() {
                return (0, n.jsxs)("header", {
                    className: "w-full md:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-100",
                    children: [(0, n.jsx)(a.default, {
                        src: "/placeholder.svg?height=100&width=200",
                        alt: "Car Locksmith Logo",
                        width: 200,
                        height: 100,
                        className: "mb-8"
                    }), (0, n.jsxs)("div", {
                        className: "flex gap-8 mb-8",
                        children: [(0, n.jsx)("a", {
                            href: "#",
                            className: "text-3xl text-gray-800 hover:text-blue-600 transition-colors",
                            children: (0, n.jsx)(l.G, {
                                icon: o.neY
                            })
                        }), (0, n.jsx)("a", {
                            href: "#",
                            className: "text-3xl text-gray-800 hover:text-pink-600 transition-colors",
                            children: (0, n.jsx)(l.G, {
                                icon: o.Zzi
                            })
                        }), (0, n.jsx)("a", {
                            href: "tel:+1234567890",
                            className: "text-3xl text-gray-800 hover:text-green-600 transition-colors md:hidden",
                            children: (0, n.jsx)(l.G, {
                                icon: c.j1w
                            })
                        })]
                    }), (0, n.jsx)("span", {
                        className: "text-2xl font-bold hidden md:block",
                        children: "+1 785 404 5816"
                    })]
                })
            }

            function d(e) {
                let {
                    onSubmit: r
                } = e, [t, a] = (0, s.useState)({
                    make: "",
                    model: "",
                    year: "",
                    contact: ""
                }), l = e => {
                    a({
                        ...t,
                        [e.target.name]: e.target.value
                    })
                };
                return (0, n.jsxs)("div", {
                    className: "w-full max-w-md",
                    children: [(0, n.jsx)("h1", {
                        className: "text-3xl font-bold mb-8 text-center",
                        children: "carkeyslocksmith"
                    }), (0, n.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault(), r(t)
                        },
                        className: "space-y-6",
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            name: "make",
                            value: t.make,
                            onChange: l,
                            placeholder: "Car Make",
                            required: !0,
                            className: "w-full p-2 border border-gray-300 rounded"
                        }), (0, n.jsx)("input", {
                            type: "text",
                            name: "model",
                            value: t.model,
                            onChange: l,
                            placeholder: "Car Model",
                            required: !0,
                            className: "w-full p-2 border border-gray-300 rounded"
                        }), (0, n.jsx)("input", {
                            type: "number",
                            name: "year",
                            value: t.year,
                            onChange: l,
                            placeholder: "Car Year",
                            required: !0,
                            className: "w-full p-2 border border-gray-300 rounded"
                        }), (0, n.jsx)("input", {
                            type: "text",
                            name: "contact",
                            value: t.contact,
                            onChange: l,
                            placeholder: "Contact Information",
                            required: !0,
                            className: "w-full p-2 border border-gray-300 rounded"
                        }), (0, n.jsx)("button", {
                            type: "submit",
                            className: "w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",
                            children: "Submit"
                        })]
                    })]
                })
            }

            function u(e) {
                let {
                    isOpen: r,
                    onClose: t,
                    onConfirm: s,
                    data: a
                } = e;
                return r ? (0, n.jsx)("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                    children: (0, n.jsxs)("div", {
                        className: "bg-white p-8 rounded-lg max-w-md w-full",
                        children: [(0, n.jsx)("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "Confirm Your Information"
                        }), (0, n.jsxs)("p", {
                            children: [(0, n.jsx)("strong", {
                                children: "Car Make:"
                            }), " ", a.make]
                        }), (0, n.jsxs)("p", {
                            children: [(0, n.jsx)("strong", {
                                children: "Car Model:"
                            }), " ", a.model]
                        }), (0, n.jsxs)("p", {
                            children: [(0, n.jsx)("strong", {
                                children: "Car Year:"
                            }), " ", a.year]
                        }), (0, n.jsxs)("p", {
                            children: [(0, n.jsx)("strong", {
                                children: "Contact Information:"
                            }), " ", a.contact]
                        }), (0, n.jsxs)("div", {
                            className: "flex justify-around mt-6",
                            children: [(0, n.jsx)("button", {
                                onClick: s,
                                className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",
                                children: "Confirm"
                            }), (0, n.jsx)("button", {
                                onClick: t,
                                className: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",
                                children: "Cancel"
                            })]
                        })]
                    })
                }) : null
            }

            function x() {
                let [e, r] = (0, s.useState)(!1), [t, a] = (0, s.useState)({
                    make: "",
                    model: "",
                    year: "",
                    contact: ""
                }), l = async () => {
                    try {
                        if ((await fetch("https://30wczp4ll4.execute-api.eu-north-1.amazonaws.com/Prod", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(t)
                        })).ok) alert("Form submitted successfully!"), r(!1);
                        else throw Error("Server response was not ok.")
                    } catch (e) {
                        console.error("Error:", e), alert("An error occurred. Please try again.")
                    }
                };
                return (0, n.jsxs)("div", {
                    className: "min-h-screen flex flex-col md:flex-row",
                    children: [(0, n.jsx)(i, {}), (0, n.jsx)("main", {
                        className: "flex-1 p-8 flex items-center justify-center",
                        children: (0, n.jsx)(d, {
                            onSubmit: e => {
                                a(e), r(!0)
                            }
                        })
                    }), (0, n.jsx)(u, {
                        isOpen: e,
                        onClose: () => r(!1),
                        onConfirm: l,
                        data: t
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [676, 958, 566, 971, 117, 744], function () {
            return e(e.s = 1538)
        }), _N_E = e.O()
    }
]);