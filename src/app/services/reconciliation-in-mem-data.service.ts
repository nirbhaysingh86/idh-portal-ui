import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Department } from '../models/department';
import { DiscrepancyLocationDetails } from '../models/discrepancylocationdetails';
import { Items } from '../models/items';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class ReconciliationInMemDataService implements InMemoryDbService {
  createDb() {
    let locations: Location[] = [
      { locid: 1, locationName: 'Portland', locationCode: 'PL', locationType: 'International', discrepancy: 451, W01: 461, W02: 326, W03: 249, W04: 396, W05: 316, W06: 306, W07: 336, W08: 316, W09: 336, W10: 386, W11: 316, W12: 306, W13: 266, W14: 166, W15: 66, W16: 112 },
      { locid: 2, locationName: 'Denver', locationCode: 'DN', locationType: 'International', discrepancy: 366, W01: 396, W02: 326, W03: 343, W04: 166, W05: 266, W06: 66, W07: 146, W08: 99, W09: 226, W10: 466, W11: 326, W12: 206, W13: 56, W14: 44, W15: 222, W16: 114 },
      { locid: 3, locationName: 'Seattle', locationCode: 'SE', locationType: 'International', discrepancy: 244, W01: 366, W02: 320, W03: 235, W04: 444, W05: 432, W06: 123, W07: 232, W08: 321, W09: 95, W10: 98, W11: 99, W12: 78, W13: 145, W14: 23, W15: 22, W16: 108 },
      { locid: 4, locationName: 'Los Angeles', locationCode: 'LA', locationType: 'International', discrepancy: 379, W01: 343, W02: 211, W03: 245, W04: 321, W05: 454, W06: 88, W07: 116, W08: 109, W09: 234, W10: 342, W11: 159, W12: 77, W13: 88, W14: 99, W15: 200, W16: 454 },
      { locid: 5, locationName: 'San Francisco', locationCode: 'SF', locationType: 'International', discrepancy: 356, W01: 432, W02: 232, W03: 232, W04: 121, W05: 232, W06: 432, W07: 321, W08: 232, W09: 89, W10: 78, W11: 232, W12: 155, W13: 98, W14: 43, W15: 245, W16: 444 },
      { locid: 6, locationName: 'San Diego', locationCode: 'SD', locationType: 'Domestic', discrepancy: 345, W01: 232, W02: 233, W03: 121, W04: 222, W05: 334, W06: 78, W07: 56, W08: 67, W09: 232, W10: 232, W11: 423, W12: 366, W13: 99, W14: 186, W15: 423, W16: 143 },
      { locid: 7, locationName: 'Austin', locationCode: 'AS', locationType: 'Domestic', discrepancy: 378, W01: 366, W02: 366, W03: 121, W04: 211, W05: 321, W06: 77, W07: 322, W08: 201, W09: 211, W10: 134, W11: 167, W12: 322, W13: 99, W14: 432, W15: 366, W16: 167 },
      { locid: 8, locationName: 'Phoenix', locationCode: 'PX', locationType: 'International', discrepancy: 321, W01: 322, W02: 366, W03: 121, W04: 51, W05: 45, W06: 107, W07: 366, W08: 165, W09: 421, W10: 65, W11: 77, W12: 366, W13: 111, W14: 366, W15: 232, W16: 22 },
      { locid: 9, locationName: 'Tucson', locationCode: 'TX', locationType: 'Domestic', discrepancy: 222, W01: 366, W02: 232, W03: 132, W04: 122, W05: 343, W06: 432, W07: 108, W08: 211, W09: 211, W10: 322, W11: 88, W12: 78, W13: 21, W14: 11, W15: 123, W16: 22 },
      { locid: 10, locationName: 'Boston', locationCode: 'BN', locationType: 'Domestic', discrepancy: 231, W01: 366, W02: 332, W03: 321, W04: 366, W05: 334, W06: 432, W07: 44, W08: 455, W09: 321, W10: 434, W11: 111, W12: 333, W13: 116, W14: 366, W15: 444, W16: 167 },
      { locid: 11, locationName: 'New York', locationCode: 'NY', locationType: 'Domestic', discrepancy: 256, W01: 366, W02: 322, W03: 211, W04: 345, W05: 78, W06: 62, W07: 67, W08: 87, W09: 232, W10: 432, W11: 132, W12: 115, W13: 366, W14: 66, W15: 44, W16: 144 },
      { locid: 12, locationName: 'Florida', locationCode: 'FL', locationType: 'International', discrepancy: 230, W01: 232, W02: 232, W03: 321, W04: 190, W05: 31, W06: 61, W07: 432, W08: 111, W09: 334, W10: 321, W11: 111, W12: 343, W13: 279, W14: 289, W15: 53, W16: 156 },
      { locid: 13, locationName: 'Chicago', locationCode: 'CO', locationType: 'International', discrepancy: 198, W01: 366, W02: 366, W03: 356, W04: 180, W05: 211, W06: 321, W07: 150, W08: 100, W09: 122, W10: 32, W11: 99, W12: 342, W13: 233, W14: 303, W15: 123, W16: 213 },
      { locid: 14, locationName: 'Minnesota', locationCode: 'MN', locationType: 'International', discrepancy: 380, W01: 444, W02: 390, W03: 121, W04: 122, W05: 122, W06: 211, W07: 211, W08: 34, W09: 16, W10: 11, W11: 212, W12: 221, W13: 321, W14: 212, W15: 432, W16: 122 },
    ];
    let departments: Department[] = [
      { dptid: 1, departmentName: 'Menswear', departmentCode: 'BL', discrepancy: 1599, departmentType: 'International', W01: 1599, W02: 136, W03: 777, W04: 1448, W05: 405, W06: 306, W07: 336, W08: 316, W09: 336, W10: 386, W11: 316, W12: 306, W13: 266, W14: 166, W15: 66, W16: 112 },
      { dptid: 2, departmentName: 'Shoes', departmentCode: 'BU', discrepancy: 136, departmentType: 'International', W01: 461, W02: 326, W03: 249, W04: 396, W05: 316, W06: 306, W07: 336, W08: 316, W09: 336, W10: 386, W11: 316, W12: 306, W13: 266, W14: 166, W15: 66, W16: 112 },
      { dptid: 3, departmentName: 'Handbags', departmentCode: 'EP', discrepancy: 777, departmentType: 'Domestic', W01: 461, W02: 326, W03: 249, W04: 396, W05: 316, W06: 306, W07: 336, W08: 316, W09: 336, W10: 386, W11: 316, W12: 306, W13: 266, W14: 166, W15: 66, W16: 112 },
      { dptid: 4, departmentName: 'Beauty', departmentCode: 'EA', discrepancy: 1448, departmentType: 'International', W01: 461, W02: 326, W03: 249, W04: 396, W05: 316, W06: 306, W07: 336, W08: 316, W09: 336, W10: 386, W11: 316, W12: 306, W13: 266, W14: 166, W15: 66, W16: 112 },
      { dptid: 5, departmentName: 'Accessories', departmentCode: 'RO', discrepancy: 405, departmentType: 'International', W01: 461, W02: 326, W03: 249, W04: 396, W05: 316, W06: 306, W07: 336, W08: 316, W09: 336, W10: 386, W11: 316, W12: 306, W13: 266, W14: 166, W15: 66, W16: 112 },

    ];
    let items: Items[] = [
      { itemid: 1, dptid: 1, locid: 1, itemsName: 'Levis', itemsCode: 'LV', itemsPrice: '456', discrepancy: 1599 },
      { itemid: 2, dptid: 1, locid: 1, itemsName: 'Lee', itemsCode: 'LE', itemsPrice: '45', discrepancy: 136 },
      { itemid: 3, dptid: 1, locid: 1, itemsName: 'lee cooper', itemsCode: 'LC', itemsPrice: '43', discrepancy: 777 },
      { itemid: 4, dptid: 1, locid: 1, itemsName: 'Eagan Walmart', itemsCode: 'EA', itemsPrice: '565', discrepancy: 1448 },
      { itemid: 5, dptid: 1, locid: 2, itemsName: 'Roseville Walmart', itemsCode: 'RO', itemsPrice: '3455', discrepancy: 405 },
      { itemid: 6, dptid: 1, locid: 1, itemsName: 'Shakopee Walmart', itemsCode: 'SH', itemsPrice: '345', discrepancy: 0 },
      { itemid: 7, dptid: 1, locid: 1, itemsName: 'Bloomington Walmart', itemsCode: 'BL', itemsPrice: '456', discrepancy: 0 },
      { itemid: 8, dptid: 1, locid: 1, itemsName: 'Burnsville Walmart', itemsCode: 'BU', itemsPrice: '45', discrepancy: 0 },
      { itemid: 9, dptid: 1, locid: 1, itemsName: 'Eden Prairie Walmart', itemsCode: 'EP', itemsPrice: '43', discrepancy: 0 },
      { itemid: 10, dptid: 1, locid: 1, itemsName: 'Eagan Walmart', itemsCode: 'EA', itemsPrice: '565', discrepancy: 0 },
      { itemid: 11, dptid: 1, locid: 1, itemsName: 'Roseville Walmart', itemsCode: 'RO', itemsPrice: '3455', discrepancy: 0 },
      { itemid: 12, dptid: 1, locid: 1, itemsName: 'Shakopee Walmart', itemsCode: 'SH', itemsPrice: '345', discrepancy: 0 },
    ];
    let discrepancyLocationDetails: DiscrepancyLocationDetails[] = [
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 948, Item: '005141416', sourceCount: 12, targetCount: 15 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 944, Item: '857450003', sourceCount: 9, targetCount: 12 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 948, Item: '387960052', sourceCount: 8, targetCount: 10 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 931, Item: '005010194', sourceCount: 5, targetCount: 3 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 931, Item: '173691671', sourceCount: 3, targetCount: 1 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 938, Item: '342400004', sourceCount: 1, targetCount: 3 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 948, Item: '527920011', sourceCount: 15, targetCount: 20 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 949, Item: '196260291', sourceCount: 35, targetCount: 38 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 938, Item: 'A07530001', sourceCount: 40, targetCount: 45 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 946, Item: '859650004', sourceCount: 5, targetCount: 8 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 947, Item: '155050188', sourceCount: 17, targetCount: 15 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 931, Item: '288330374', sourceCount: 13, targetCount: 15 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 947, Item: '181810422', sourceCount: 8, targetCount: 15 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 934, Item: '188810562', sourceCount: 4, targetCount: 10 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 934, Item: '349640087', sourceCount: 8, targetCount: 6 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 941, Item: '380190320', sourceCount: 9, targetCount: 6 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 941, Item: 'A07530001', sourceCount: 10, targetCount: 6 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 934, Item: '295070523', sourceCount: 11, targetCount: 12 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 942, Item: '005051994', sourceCount: 14, targetCount: 14 },
      { locid: 3, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 948, Item: '360150080', sourceCount: 0, targetCount: 15 },

      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 949, Item: 'AA5141416', sourceCount: 12, targetCount: 15 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 946, Item: '857450003', sourceCount: 9, targetCount: 12 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 947, Item: '387960052', sourceCount: 8, targetCount: 10 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 931, Item: '005010194', sourceCount: 5, targetCount: 3 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 931, Item: '173691671', sourceCount: 3, targetCount: 1 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 936, Item: '342400004', sourceCount: 1, targetCount: 3 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 945, Item: '527920011', sourceCount: 15, targetCount: 20 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 944, Item: '196260291', sourceCount: 35, targetCount: 38 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 933, Item: 'A07530001', sourceCount: 40, targetCount: 45 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 943, Item: '859650004', sourceCount: 5, targetCount: 8 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 944, Item: '155050188', sourceCount: 17, targetCount: 15 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 933, Item: '288330374', sourceCount: 13, targetCount: 15 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 942, Item: '181810422', sourceCount: 8, targetCount: 15 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 933, Item: '188810562', sourceCount: 4, targetCount: 10 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 934, Item: '349640087', sourceCount: 8, targetCount: 6 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 911, Item: '380190320', sourceCount: 9, targetCount: 6 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 931, Item: 'A07530001', sourceCount: 10, targetCount: 6 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 934, Item: '295070523', sourceCount: 11, targetCount: 12 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 932, Item: '005051994', sourceCount: 14, targetCount: 14 },
      { locid: 7, sourceSystem: 'Merchandising', targetSystem: 'Store', store: 948, Item: '360150080', sourceCount: 0, targetCount: 15 },

    ];
    return { locations, departments, items, discrepancyLocationDetails };
  }

}

