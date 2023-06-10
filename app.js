const express = require('express');
const app = express();

// Data edukasi mitigasi bencana
const educationData = [
  {
    id: 1,
    title: 'Earthquake Disaster Mitigation (In Multi-Story Buildings)',
    detail: [
      {
        id: 'a',
        heading: 'Preparing for an Earthquake',
        description: [
          {
            heading: 'Create an Emergency Plan',
            detail: [
              'Have a pre-determined evacuation plan and identify multiple escape routes in case one becomes inaccessible.',
              'Get familiar with the emergency route in the buildings that includes evacuation routes, safe assembly points, and communication protocols.'
            ]
          }
        ],
      },
      {
        id: 'b',
        heading: 'During an Earthquake',
        description: [
          {
            heading: 'Drop, Cover, and Hold On',
            detail: [
              'Drop to the ground, take cover under a sturdy piece of furniture, and hold on until the shaking stops.',
              'Protect your head and neck with your arms and stay away from windows, glass, and heavy objects that may fall.'
            ]
          },
          {
            heading: 'Exit via Stairs',
            detail: 'Elevators are not safe during an earthquake and should not be used for evacuation under any circumstances'
          },
          {
            heading: 'Await Further Instructions',
            detail: 'Once outside the building, remain in the designated assembly areas until further instructions are provided by emergency personnel.'
          }
        ],
      },
      {
        id: 'c',
        heading: 'After an Earthquake',
        description: [
          {
            heading: 'Assessing Safety',
            detail: [
              'Check yourself and others for injuries and administer first aid as needed.',
              'Assess your surroundings for potential dangers, including damaged structures, downed power lines, and gas leaks.'
            ]
          },
          {
            heading: 'Emergency Services and Utilities',
            detail: 'Contact emergency services or find emergency personnel to report any injuries, trapped individuals, or other urgent needs. Follow their instructions to assist in a coordinated evacuation.'
          }
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Earthquake Disaster Mitigation (In Two-Story Buildings)',
    detail: [
      {
        id: 'a',
        heading: 'Preparing for an Earthquake',
        description: [
          {
            heading: 'Create an Emergency Plan',
            detail: [
              'Get to know the layout of the building, including emergency exits, stairways, and safe areas on both floors.',
              'Get familiar for the emergency route in the buildings. Avoid a route that have  potential hazards such as heavy objects or tall furniture that are not securely anchored'
            ]
          }
        ],
      },
      {
        id: 'b',
        heading: 'During an Earthquake',
        description: [
          {
            heading: 'Seeking Safe Locations',
            detail: [
              'Find safe spots such as under sturdy furniture or against interior walls, away from windows and heavy objects.',
              'Protect your head and neck with your arms and stay away from windows and glass.'
            ]
          },
          {
            heading: 'Evacuation Planning:',
            detail: [
              'Go to the nearest emergency exits on both floors and establish evacuation routes.',
              'Establish a meeting point outside the building where family members can gather after evacuating.'
            ]
          }
        ],
      },
      {
        id: 'c',
        heading: 'After an Earthquake',
        description: [
          {
            heading: 'Assessing Safety',
            detail: [
              'Check yourself and others for injuries and administer first aid as needed',
              'Assess your surroundings for potential dangers, including damaged structures, downed power lines, and gas leaks.'
            ]
          },
          {
            heading: 'Emergency Services and Utilities',
            detail: 'Contact emergency services or find emergency personnel to report any injuries, trapped individuals, or other urgent needs. Follow their instructions to assist in a coordinated evacuation.'
          }
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Earthquake Disaster Mitigation (Outside Buildings)',
    detail: [
      {
        id: 'a',
        heading: 'Before an Earthquake',
        description: [
          {
            heading: 'Identify Safe Areas',
            detail: [
              'Identify open spaces away from buildings, trees, and power lines where you can take shelter during an earthquake.',
              'Avoid areas prone to landslides or falling objects'
            ]
          }
        ],
      },
      {
        id: 'b',
        heading: 'During an Earthquake',
        description: [
          {
            heading: 'Drop, Cover, and Hold On',
            detail: [
              'Drop to the ground, take cover, and protect your head and neck.',
              'If possible, find a clear area away from buildings, streetlights, and utility wires.'
            ]
          },
        ],
      },
      {
        id: 'c',
        heading: 'After an Earthquake',
        description: [
          {
            heading: 'Assessing Safety',
            detail: [
              'Check yourself and others for injuries and administer first aid as needed',
              'Be cautious potential hazards such as aftershocks, falling debris, and damaged infrastructure.'
            ]
          },
          {
            heading: 'Emergency Services and Utilities',
            detail: 'Contact emergency services to report any immediate life-threatening situations.'
          }
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Volcanic Eruption Disaster Mitigation (Around the Volcano)',
    detail: [
      {
        id: 'a',
        heading: 'During a Volcanic Eruption',
        description: [
          {
            heading: "Follow Authorities' Instructions",
            detail: [
              'Stay informed and follow evacuation orders or any recommendations from authorities.',
              'Be prepared to leave the area quickly and calmly.'
            ]
          },
          {
            heading: 'Protecting Yourself from Ash',
            detail: 'Wear a dust mask or damp cloth to protect your respiratory system  and goggles.'
          },
          {
            heading: "Seek Shelter",
            detail: [
              'Find a sturdy building or structure to take shelter in, preferably one that is outside the danger zone and offers protection from falling debris and ash.',
              'Once inside a shelter, stay indoors until authorities confirm it is safe to venture outside.'
            ]
          }
        ],
      },
      {
        id: 'b',
        heading: 'After a Volcanic Eruption',
        description: [
          {
            heading: 'Ash Cleanup',
            detail: [
              'Follow guidelines from local authorities for proper ash cleanup and disposal.',
              'Use masks, goggles, and protective clothing during cleanup activities. ',
              'Use sturdy footwear to protect your feet from hot ash or sharp debris.'
            ]
          },
          {
            heading: 'Health and Safety',
            detail: [
              'Be aware of potential health hazards caused by volcanic ash and gases.',
              'Stay updated on air quality advisories and follow recommended precautions.',
            ]
          }
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Volcanic Eruption Disaster Mitigation (For Hikers)',
    detail: [
      {
        id: 'a',
        heading: 'Preparing for a Volcanic Eruption',
        description: [
          {
            heading: 'Check Volcanic Activity',
            detail: [
              'Research the current volcanic activity and status of the area you plan to hike.',
              'Consult local authorities and follow their recommendations.'
            ]
          },
          {
            heading: 'Hiking Equipment',
            detail: [
              'Pack essential items such as water, food, a map, a compass, a whistle, a first aid kit, a headlamp, and extra clothing.',
              'Include protective gear like goggles, a dust mask, and sturdy footwear.'
            ]
          },
          {
            heading: 'Plan Ahead',
            detail: [
              'Familiarize yourself with the terrain and possible escape routes before starting your hike.',
              'Identify potential safe locations in the vicinity that offer protection from volcanic hazards.'
            ]
          },
          {
            heading: 'Monitoring Signs of Eruption',
            detail: [
              'Be attentive to any signs of volcanic activity while hiking, such as increased seismic activity, ground deformation, or changes in gas emissions.',
              'Pay attention to visual indicators like ash clouds, steam plumes, or rumbling sounds'
            ]
          }
        ],
      },
      {
        id: 'b',
        heading: 'During a Volcanic Eruption',
        description: [
          {
            heading: 'Immediate Actions during Eruption',
            detail: [
              'If you notice signs of an eruption, evaluate the situation quickly and take decisive action. ',
              'Assess the direction of the eruption, wind patterns, and ash fallout to determine the safest course of action.'
            ]
          },
          {
            heading: 'Find a Safe Location',
            detail: [
              "Seek out caves, rock formations, valleys, or sturdy buildings as potential safe locations from falling ash and volcanic projectiles.",
              "Seek Higher Ground, If you're near a volcano and pyroclastic flows (fast-moving, superheated clouds of gas and volcanic material) are a concern, move uphill or to higher ground to minimize the risk of being affected by them."
            ]
          },
          {
            heading: 'Protect Yourself from Ashfall',
            detail: [
              'Cover your mouth and nose with a dust mask or damp cloth to prevent inhalation of volcanic ash.',
              'Shield your eyes with goggles or sunglasses to protect them from irritation and ash particles.'
            ]
          },
          {
            heading: 'Stay Together',
            detail: [
              "If you're hiking with a group, ensure everyone stays together during an eruption.",
              "Regularly communicate and maintain visual contact with each other to prevent separation."
            ]
          }
        ],
      },
      {
        id: 'c',
        heading: 'After a Volcanic Eruption',
        description: [
          {
            heading: "Follow Authorities' Instructions",
            detail: [
              'Stay tuned to local authorities and follow their instructions, including any evacuation orders or recommended actions.',
              'If rescue teams or park rangers are available, follow their guidance for safe evacuation.'
            ]
          },
          {
            heading: 'Assessing Conditions',
            detail: [
              'Be cautious of potential hazards such as ash-covered trails, unstable slopes, or new lava flows.',
              'Adjust your hiking plans according to the ongoing volcanic activity.'
            ]
          }
        ],
      },
    ],
  }
];

// Endpoint untuk mendapatkan data edukasi mitigasi bencana
app.get('/api/education/titles', (req, res) => {
  const titles = educationData.map(edu => edu.title);
  res.json(titles);
});

// Endpoint untuk mendapatkan detail edukasi mitigasi bencana berdasarkan id
app.get('/api/education/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Cari data edukasi berdasarkan id
  const education = educationData.find(edu => edu.id === id);

  if (!education) {
    res.status(404).json({ error: 'Edukasi tidak ditemukan' });
  } else {
    res.json(education);
  }
});

// Menjalankan server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
