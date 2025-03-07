import nextConnect from 'next-connect';
import middleware from '../../../middleware/auth';
const models = require('../../../db/models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const handler = nextConnect()
  // Middleware
  .use(middleware)
  // Get method
  .get(async (req, res) => {
    const {
      method,
      body,
    } = req;
    const { organization_id, results, page, search, sortField = "organization_id", sortOrder = "DESC", filters = [] } = req.query;
    let _search = {};


    if (search != "") {
      if (filters == 'undefined' || filters == "null") {
        // console.log("if1")
        _search = {
          [Op.or]: [{
            organization_name_eng: {
              [Op.like]: '%' + search + '%'
            },
          }
          ],
          organization_id: organization_id

        }
      } else {
        console.log("if2")
        console.log(filters)
        _search = {
          [Op.or]: [{
            organization_name_eng: {
              [Op.like]: '%' + search + '%'
            },
          }
          ],
          organization_id: organization_id


        }
      }


    } else {
      if (filters == 'undefined' || filters == 'null') {
        // console.log("if3")
        // console.log(filters)

        _search = {
          organization_id: organization_id

        }
      } else {
        // console.log("if4")
        // console.log(filters)
        _search = {
          organization_id: organization_id

        }
      }

    }


    // console.log(_search)
    const _organization = await models.Organization.findAndCountAll({
      attributes: [
        'organization_id',
        'organization_name',
        'organization_name_eng',
        'organization_logo',
        'organization_address',
        'organization_email',
        'organization_email_alert',
        'organization_phone',
        'organization_fax',
        'social_fb_pageid',
        'rss',
        'person01_name',
        'person01_position',
        'person01_image',
        'person02_name',
        'person02_position',
        'person02_image',
        'person03_name',
        'person03_position',
        'person03_image',
      ],
      where: _search,
      offset: results * (page - 1),
      limit: parseInt(results),
      order: [
        [sortField != "undefined" && sortOrder != "undefined" ? sortField : "organization_id", sortOrder != "undefined" ? sortOrder == "ascend" ? "ASC" : "DESC" : "DESC"]
      ]
    });
    return res.status(200).json({
      info: {
        page: page,
        results: results
      },
      results: _organization.rows,
      totalCount: _organization.count
    });

  })

export default handler;
