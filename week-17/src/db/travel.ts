interface TravelPlan {
  id: number;
  title: string;
  destination_city: string;
  destination_country: string;
  start_date: string;
  end_date: string;
  budget: number;
}

import { client } from "..";
import { QueryResult } from "pg";

/*
 * Function should insert a new travel plan for this user
 * Should return a travel plan object
 * {
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }
 */
export async function createTravelPlan(
  userId: number,
  title: string,
  destinationCity: string,
  destinationCountry: string,
  startDate: string,
  endDate: string,
  budget: number
) {
  try {
    const result = await client.query(
      `insert into travel_plans(user_id,title,destination_city,destination_country,start_date,end_date,budget) values($1,$2,$3,$4,$5,$6,$7)  RETURNING *;`,
      [
        userId,
        title,
        destinationCity,
        destinationCountry,
        startDate,
        endDate,
        budget,
      ]
    );
    console.log(
      "this is result of create travel planes query ",
      result.rows[0]
    );
    return result.rows[0];
  } catch (e) {
    console.log("Error while creating travelPlan : ", e);
  }
}

/*
 * Function should update the budget or title for a specific travel plan
 * Should return the updated travel plan object
 */
export async function updateTravelPlan(
  planId: number,
  title?: string,
  budget?: number
) {
  try {
    const result = await client.query(
      `update travel_plans set title = $1 , budget = $2 where id = $3  RETURNING *;`,
      [title, budget, planId]
    );
    console.log(
      "this is result of update travel planes query ",
      result.rows[0]
    );
    return result.rows[0];
  } catch (e) {
    console.log("Error while updating the travel plan : ", e);
  }
}

/*
 * Function should get all the travel plans of a given user
 * Should return an array of travel plan objects
 * [{
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }]
 */
export async function getTravelPlans(userId: number) {
  try {
    const result = await client.query(
      `select * from travel_plans where user_id = $1 ;`,
      [userId]
    );
    console.log("this is result of get travel planes query ", result.rows);
    return result.rows;
  } catch (e) {
    console.log("Error while fetching travel plans details : ", e);
  }
}
