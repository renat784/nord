import { Country, Servers } from './../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  americas: Country[] = [
      {
        name: 'United States', imageName: 'us.svg', serversCount: 1823,
        serverFeatures: ['P2P', 'Dedicated IP', 'Double VPN', 'Obfuscated']
      },
      {
        name: 'Canada', imageName: 'ca.svg', serversCount: 446,
        serverFeatures: ['P2P', 'Double VPN', 'Obfuscated']
      },
      {
        name: 'Brazil', imageName: 'br.svg', serversCount: 34,
        serverFeatures: ['P2P']
      },
      {
        name: 'Argentina', imageName: 'ar.svg', serversCount: 21,
        serverFeatures: []
      },
      {
        name: 'Mexico', imageName: 'mx.svg', serversCount: 13,
        serverFeatures: ['P2P']
      },
      {
        name: 'Chile', imageName: 'cl.svg', serversCount: 9,
        serverFeatures: ['P2P']
      },
      {
        name: 'Costa Rica', imageName: 'cr.svg', serversCount: 5,
        serverFeatures: []
      }
    ];

  europe: Country[] = [
    {
      name: 'United Kingdom', imageName: 'gb.svg', serversCount: 591,
      serverFeatures: ['P2P', 'Dedicated IP', 'Double VPN', 'Obfuscated']
    },
    {
      name: 'Germany', imageName: 'de.svg', serversCount: 293,
      serverFeatures: ['P2P', 'Dedicated IP', 'Obfuscated']
    },
    {
      name: 'France', imageName: 'fr.svg', serversCount: 279,
      serverFeatures: ['P2P', 'Dedicated IP', 'Double VPN', 'Obfuscated']
    },
    {
      name: 'Netherlands', imageName: 'nl.svg', serversCount: 259,
      serverFeatures: ['P2P', 'Dedicated IP', 'Double VPN', 'Obfuscated']
    },
    {
      name: 'Sweden', imageName: 'se.svg', serversCount: 184,
      serverFeatures: ['P2P', 'Double VPN', 'Obfuscated']
    },
    {
      name: 'Switzerland', imageName: 'ch.svg', serversCount: 124,
      serverFeatures: ['P2P', 'Double VPN', 'Obfuscated']
    },
    {
      name: 'Denmark', imageName: 'dk.svg', serversCount: 96,
      serverFeatures: ['P2P']
    },
    {
      name: 'Belgium', imageName: 'be.svg', serversCount: 76,
      serverFeatures: ['P2P']
    },
    {
      name: 'Norway', imageName: 'no.svg', serversCount: 73,
      serverFeatures: ['P2P']
    },
    {
      name: 'Italy', imageName: 'it.svg', serversCount: 71,
      serverFeatures: ['P2P', 'Obfuscated']
    },
    {
      name: 'Poland', imageName: 'pl.svg', serversCount: 67,
      serverFeatures: ['P2P']
    },
    {
      name: 'Spain', imageName: 'es.svg', serversCount: 61,
      serverFeatures: ['P2P']
    },
    {
      name: 'Ireland', imageName: 'ie.svg', serversCount: 59,
      serverFeatures: ['P2P']
    },
    {
      name: 'Finland', imageName: 'fi.svg', serversCount: 45,
      serverFeatures: ['P2P']
    },
    {
      name: 'Austria', imageName: 'at.svg', serversCount: 41,
      serverFeatures: ['P2P']
    },
    {
      name: 'Czech Republic', imageName: 'cz.svg', serversCount: 39,
      serverFeatures: ['P2P']
    },
    {
      name: 'Serbia', imageName: 'rs.svg', serversCount: 38,
      serverFeatures: ['P2P']
    },
    {
      name: 'Portugal', imageName: 'pt.svg', serversCount: 30,
      serverFeatures: ['P2P']
    },
    {
      name: 'Slovakia', imageName: 'sk.svg', serversCount: 28,
      serverFeatures: ['P2P']
    },
    {
      name: 'Romania', imageName: 'ro.svg', serversCount: 27,
      serverFeatures: ['P2P']
    },
    {
      name: 'Ukraine', imageName: 'ua.svg', serversCount: 24,
      serverFeatures: []
    },
    {
      name: 'Latvia', imageName: 'lv.svg', serversCount: 22,
      serverFeatures: ['P2P']
    },
    {
      name: 'Bulgaria', imageName: 'bg.svg', serversCount: 21,
      serverFeatures: ['P2P']
    },
    {
      name: 'Hungary', imageName: 'hu.svg', serversCount: 21,
      serverFeatures: ['P2P']
    },
    {
      name: 'Luxembourg', imageName: 'lu.svg', serversCount: 19,
      serverFeatures: ['P2P']
    },
    {
      name: 'Estonia', imageName: 'ee.svg', serversCount: 17,
      serverFeatures: ['P2P']
    },
    {
      name: 'Greece', imageName: 'gr.svg', serversCount: 14,
      serverFeatures: ['P2P']
    },
    {
      name: 'Iceland', imageName: 'is.svg', serversCount: 10,
      serverFeatures: ['P2P']
    },
    {
      name: 'Albania', imageName: 'al.svg', serversCount: 9,
      serverFeatures: ['P2P']
    },
    {
      name: 'Croatia', imageName: 'hr.svg', serversCount: 7,
      serverFeatures: ['P2P']
    },
    {
      name: 'Cyprus', imageName: 'cy.svg', serversCount: 6,
      serverFeatures: []
    },
    {
      name: 'Slovenia', imageName: 'si.svg', serversCount: 5,
      serverFeatures: ['P2P']
    },
    {
      name: 'Georgia', imageName: 'ge.svg', serversCount: 4,
      serverFeatures: []
    },
    {
      name: 'Bosnia and Herzegovina', imageName: 'ba.svg', serversCount: 3,
      serverFeatures: ['P2P']
    },
    {
      name: 'Moldova', imageName: 'md.svg', serversCount: 3,
      serverFeatures: ['P2P']
    },
    {
      name: 'North Macedonia', imageName: 'mk.svg', serversCount: 2,
      serverFeatures: ['P2P']
    }
  ];

  asiaPacific: Country[] = [
    {
      name: 'Australia', imageName: 'au.svg', serversCount: 247,
      serverFeatures: ['P2P']
    },
    {
      name: 'Singapore', imageName: 'sg.svg', serversCount: 129,
      serverFeatures: ['P2P', 'Obfuscated']
    },
    {
      name: 'Japan', imageName: 'jp.svg', serversCount: 82,
      serverFeatures: ['P2P', 'Obfuscated']
    },
    {
      name: 'Hong Kong', imageName: 'hk.svg', serversCount: 80,
      serverFeatures: ['P2P', 'Obfuscated']
    },
    {
      name: 'New Zealand', imageName: 'nz.svg', serversCount: 34,
      serverFeatures: ['P2P']
    },
    {
      name: 'Vietnam', imageName: 'vn.svg', serversCount: 15,
      serverFeatures: []
    },
    {
      name: 'Taiwan', imageName: 'tw.svg', serversCount: 14,
      serverFeatures: ['Double VPN']
    },
    {
      name: 'Indonesia', imageName: 'id.svg', serversCount: 10,
      serverFeatures: []
    },
    {
      name: 'Malaysia', imageName: 'my.svg', serversCount: 10,
      serverFeatures: []
    },
    {
      name: 'South Korea', imageName: 'kr.svg', serversCount: 9,
      serverFeatures: []
    },
    {
      name: 'Thailand', imageName: 'th.svg', serversCount: 7,
      serverFeatures: []
    }
  ];

  others: Country[] = [
    {
      name: 'South Africa', imageName: 'za.svg', serversCount: 50,
      serverFeatures: ['P2P']
    },
    {
      name: 'India', imageName: 'in.svg', serversCount: 30,
      serverFeatures: ['P2P']
    },
    {
      name: 'Israel', imageName: 'il.svg', serversCount: 20,
      serverFeatures: ['P2P']
    },
    {
      name: 'United Arab Emirates', imageName: 'ae.svg', serversCount: 20,
      serverFeatures: ['Obfuscated']
    },
    {
      name: 'Turkey', imageName: 'tr.svg', serversCount: 13,
      serverFeatures: ['P2P', 'Obfuscated']
    },
  ];

  servers: Servers[] = [
    { region: 'The Americas', count: 2351, countries: this.americas },
    { region: 'Europe', count: 2668, countries: this.europe },
    { region: 'Asia Pacific', count: 637, countries: this.asiaPacific },
    { region: 'Africa, the Middle East and India', count: 133, countries: this.others }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
