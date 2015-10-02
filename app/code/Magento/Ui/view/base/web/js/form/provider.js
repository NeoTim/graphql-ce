/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'underscore',
    'uiElement',
    './client'
], function (_, Element, Client) {
    'use strict';

    return Element.extend({
        initialize: function () {
            this._super()
                .initClient();

            return this;
        },

        initClient: function () {
            this.client = new Client({
                urls: {
                    beforeSave: this.validate_url,
                    save: this.submit_url
                }
            });

            return this;
        },

        save: function (options) {
            var data = this.get('data');

            this.client.save(data, options);

            return this;
        }
    });
});
