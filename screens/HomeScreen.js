/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Button, FlatList} from 'react-native';
import {ListItem} from '../components/ListItem';

export const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <ListItem
      id={item.id}
      img={item.urls}
      description={item.alt_description}
      name={item.user.username}
    />
  );

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Go to ImageScreen"
          onPress={() =>
            navigation.navigate('Image', {url: DATA[0].urls.thumb})
          }
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
});

const DATA = [
  {
    id: 'AQ8XIIRDuWc',
    created_at: '2020-10-03T16:47:20-04:00',
    updated_at: '2020-10-14T01:05:41-04:00',
    promoted_at: null,
    width: 3763,
    height: 5644,
    color: '#070909',
    blur_hash: 'LWHeg_~W%Mbv?vkDxaW=?bxuofWB',
    description: null,
    alt_description: null,
    urls: {
      raw:
        'https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/AQ8XIIRDuWc',
      html: 'https://unsplash.com/photos/AQ8XIIRDuWc',
      download: 'https://unsplash.com/photos/AQ8XIIRDuWc/download',
      download_location: 'https://api.unsplash.com/photos/AQ8XIIRDuWc/download',
    },
    categories: [],
    likes: 48,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7686984&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
      ],
      tagline: 'Pets Bring Us Together',
      tagline_url:
        'https://www.chewy.com/?utm_source=unsplash&utm_medium=brand&utm_term=chewy-35&utm_content=AQ8XIIRDuWc',
      sponsor: {
        id: '21uOSEd-cSI',
        updated_at: '2020-10-23T15:29:40-04:00',
        username: 'chewy',
        name: 'Chewy',
        first_name: 'Chewy',
        last_name: null,
        twitter_username: 'chewy',
        portfolio_url: 'https://www.chewy.com/',
        bio:
          'There are endless ways #PetsBringUsTogether. We’re just here to help.',
        location: null,
        links: {
          self: 'https://api.unsplash.com/users/chewy',
          html: 'https://unsplash.com/@chewy',
          photos: 'https://api.unsplash.com/users/chewy/photos',
          likes: 'https://api.unsplash.com/users/chewy/likes',
          portfolio: 'https://api.unsplash.com/users/chewy/portfolio',
          following: 'https://api.unsplash.com/users/chewy/following',
          followers: 'https://api.unsplash.com/users/chewy/followers',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
          medium:
            'https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
          large:
            'https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
        },
        instagram_username: 'chewy',
        total_collections: 0,
        total_likes: 0,
        total_photos: 50,
        accepted_tos: true,
      },
    },
    user: {
      id: '21uOSEd-cSI',
      updated_at: '2020-10-23T15:29:40-04:00',
      username: 'chewy',
      name: 'Chewy',
      first_name: 'Chewy',
      last_name: null,
      twitter_username: 'chewy',
      portfolio_url: 'https://www.chewy.com/',
      bio:
        'There are endless ways #PetsBringUsTogether. We’re just here to help.',
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/chewy',
        html: 'https://unsplash.com/@chewy',
        photos: 'https://api.unsplash.com/users/chewy/photos',
        likes: 'https://api.unsplash.com/users/chewy/likes',
        portfolio: 'https://api.unsplash.com/users/chewy/portfolio',
        following: 'https://api.unsplash.com/users/chewy/following',
        followers: 'https://api.unsplash.com/users/chewy/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1600206400067-ef9dc8ec33aaimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'chewy',
      total_collections: 0,
      total_likes: 0,
      total_photos: 50,
      accepted_tos: true,
    },
  },
  {
    id: '9ICEnxRqFjk',
    created_at: '2020-10-21T21:32:43-04:00',
    updated_at: '2020-10-23T15:30:02-04:00',
    promoted_at: '2020-10-23T15:30:02-04:00',
    width: 5659,
    height: 3773,
    color: '#1B1A17',
    blur_hash: 'LqH.KHNHWBj[_NR*j?jukXayayaz',
    description: 'Watch: https://youtu.be/yCtouEOCpz0',
    alt_description:
      'white and black house on brown field under white sky during daytime',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603329469859-6f455132613d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603329469859-6f455132613d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603329469859-6f455132613d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603329469859-6f455132613d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603329469859-6f455132613d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/9ICEnxRqFjk',
      html: 'https://unsplash.com/photos/9ICEnxRqFjk',
      download: 'https://unsplash.com/photos/9ICEnxRqFjk/download',
      download_location: 'https://api.unsplash.com/photos/9ICEnxRqFjk/download',
    },
    categories: [],
    likes: 0,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: '9yiXmHAclo0',
      updated_at: '2020-10-23T15:30:02-04:00',
      username: 'intricateexplorer',
      name: 'Intricate Explorer',
      first_name: 'Intricate',
      last_name: 'Explorer',
      twitter_username: 'intricatexplore',
      portfolio_url: 'https://www.intricateexplorer.com',
      bio:
        'adventure photographer // film maker\r\nwatch: youtube.com/intricateexplorer',
      location: 'Boulder, CO',
      links: {
        self: 'https://api.unsplash.com/users/intricateexplorer',
        html: 'https://unsplash.com/@intricateexplorer',
        photos: 'https://api.unsplash.com/users/intricateexplorer/photos',
        likes: 'https://api.unsplash.com/users/intricateexplorer/likes',
        portfolio: 'https://api.unsplash.com/users/intricateexplorer/portfolio',
        following: 'https://api.unsplash.com/users/intricateexplorer/following',
        followers: 'https://api.unsplash.com/users/intricateexplorer/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1550008675443-a22b55d2aa9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1550008675443-a22b55d2aa9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1550008675443-a22b55d2aa9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'intricateexplorer',
      total_collections: 2,
      total_likes: 0,
      total_photos: 54,
      accepted_tos: true,
    },
  },
  {
    id: 'QrtNsXET54g',
    created_at: '2020-10-23T09:05:01-04:00',
    updated_at: '2020-10-23T15:21:02-04:00',
    promoted_at: '2020-10-23T15:21:02-04:00',
    width: 4000,
    height: 5000,
    color: '#120C0F',
    blur_hash: 'LXIEttDixuRj~VRPR*s.xvxYozs:',
    description: 'Vintage cars of Havana, Cuba',
    alt_description:
      'blue classic car parked beside brown concrete building during daytime',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603456219129-811cd0bd776e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603456219129-811cd0bd776e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603456219129-811cd0bd776e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603456219129-811cd0bd776e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603456219129-811cd0bd776e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/QrtNsXET54g',
      html: 'https://unsplash.com/photos/QrtNsXET54g',
      download: 'https://unsplash.com/photos/QrtNsXET54g/download',
      download_location: 'https://api.unsplash.com/photos/QrtNsXET54g/download',
    },
    categories: [],
    likes: 3,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'qk6FFOFw8nI',
      updated_at: '2020-10-23T15:29:37-04:00',
      username: 'p_kuzovkova',
      name: 'Polina Kuzovkova',
      first_name: 'Polina',
      last_name: 'Kuzovkova',
      twitter_username: null,
      portfolio_url: 'https://www.instagram.com/p_kuzovkova/',
      bio: 'Lifestyle and travel photographer living in Minsk, Belarus.\r\n',
      location: 'Minsk, Belarus',
      links: {
        self: 'https://api.unsplash.com/users/p_kuzovkova',
        html: 'https://unsplash.com/@p_kuzovkova',
        photos: 'https://api.unsplash.com/users/p_kuzovkova/photos',
        likes: 'https://api.unsplash.com/users/p_kuzovkova/likes',
        portfolio: 'https://api.unsplash.com/users/p_kuzovkova/portfolio',
        following: 'https://api.unsplash.com/users/p_kuzovkova/following',
        followers: 'https://api.unsplash.com/users/p_kuzovkova/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-fb-1599732338-2f306e8de95c.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-fb-1599732338-2f306e8de95c.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-fb-1599732338-2f306e8de95c.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'p_kuzovkova',
      total_collections: 5,
      total_likes: 0,
      total_photos: 48,
      accepted_tos: true,
    },
  },
  {
    id: 'fpD-dbpFl4A',
    created_at: '2020-10-23T09:06:15-04:00',
    updated_at: '2020-10-23T15:12:02-04:00',
    promoted_at: '2020-10-23T15:12:02-04:00',
    width: 4000,
    height: 6000,
    color: '#080707',
    blur_hash: 'LcI;hhJC$exuX9%MM|j?0fV?f,af',
    description: null,
    alt_description: 'person holding white ceramic mug with brown liquid',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603458360961-8878b5ce18f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603458360961-8878b5ce18f7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603458360961-8878b5ce18f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603458360961-8878b5ce18f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603458360961-8878b5ce18f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/fpD-dbpFl4A',
      html: 'https://unsplash.com/photos/fpD-dbpFl4A',
      download: 'https://unsplash.com/photos/fpD-dbpFl4A/download',
      download_location: 'https://api.unsplash.com/photos/fpD-dbpFl4A/download',
    },
    categories: [],
    likes: 3,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'ig27zZxk1tE',
      updated_at: '2020-10-23T15:29:37-04:00',
      username: 'antonjphotos',
      name: 'Anton Jansson',
      first_name: 'Anton',
      last_name: 'Jansson',
      twitter_username: null,
      portfolio_url: 'http://www.antonjphotos.se',
      bio: 'Check me out on Instagram! - AntonJphotos',
      location: 'Sweden',
      links: {
        self: 'https://api.unsplash.com/users/antonjphotos',
        html: 'https://unsplash.com/@antonjphotos',
        photos: 'https://api.unsplash.com/users/antonjphotos/photos',
        likes: 'https://api.unsplash.com/users/antonjphotos/likes',
        portfolio: 'https://api.unsplash.com/users/antonjphotos/portfolio',
        following: 'https://api.unsplash.com/users/antonjphotos/following',
        followers: 'https://api.unsplash.com/users/antonjphotos/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1577111554999-d2b3d7429904image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1577111554999-d2b3d7429904image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1577111554999-d2b3d7429904image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'antonjphotos',
      total_collections: 2,
      total_likes: 70,
      total_photos: 102,
      accepted_tos: true,
    },
  },
  {
    id: '7POGs9je1Sc',
    created_at: '2020-10-23T08:51:20-04:00',
    updated_at: '2020-10-23T15:03:02-04:00',
    promoted_at: '2020-10-23T15:03:02-04:00',
    width: 3337,
    height: 5005,
    color: '#090504',
    blur_hash: 'LGHLJ9OsE2xF_N%MD*W;,@Xmt7V@',
    description: 'Tangerine bread.',
    alt_description: 'person holding stainless steel spoon',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603455908680-5d6de8bf7cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603455908680-5d6de8bf7cd4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603455908680-5d6de8bf7cd4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603455908680-5d6de8bf7cd4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603455908680-5d6de8bf7cd4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/7POGs9je1Sc',
      html: 'https://unsplash.com/photos/7POGs9je1Sc',
      download: 'https://unsplash.com/photos/7POGs9je1Sc/download',
      download_location: 'https://api.unsplash.com/photos/7POGs9je1Sc/download',
    },
    categories: [],
    likes: 2,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'jUl7qUlmsWY',
      updated_at: '2020-10-23T15:19:38-04:00',
      username: 'gbyz13',
      name: 'Gaby Yerden',
      first_name: 'Gaby',
      last_name: 'Yerden',
      twitter_username: 'gbyz13',
      portfolio_url: null,
      bio:
        "Graphic designer and gastronomic photographer. I like to photograph everything around me. If you use one of my photos, let me know. I would like to see your project. It's just curiosity \r\n:)",
      location: 'Tarragona',
      links: {
        self: 'https://api.unsplash.com/users/gbyz13',
        html: 'https://unsplash.com/@gbyz13',
        photos: 'https://api.unsplash.com/users/gbyz13/photos',
        likes: 'https://api.unsplash.com/users/gbyz13/likes',
        portfolio: 'https://api.unsplash.com/users/gbyz13/portfolio',
        following: 'https://api.unsplash.com/users/gbyz13/following',
        followers: 'https://api.unsplash.com/users/gbyz13/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1602873252798-a1756f8f0652image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1602873252798-a1756f8f0652image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1602873252798-a1756f8f0652image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: null,
      total_collections: 12,
      total_likes: 121,
      total_photos: 32,
      accepted_tos: true,
    },
  },
  {
    id: 'c_5AI-gE7YY',
    created_at: '2020-10-22T17:13:13-04:00',
    updated_at: '2020-10-23T14:45:01-04:00',
    promoted_at: '2020-10-23T14:45:01-04:00',
    width: 4016,
    height: 6016,
    color: '#F3F2EC',
    blur_hash: 'LPEVE20L%Mae%LM{Ipxt-:M{xaWV',
    description: null,
    alt_description: 'woman in black and white floral sleeveless dress',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603401189093-c362752df07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603401189093-c362752df07c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603401189093-c362752df07c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603401189093-c362752df07c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603401189093-c362752df07c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/c_5AI-gE7YY',
      html: 'https://unsplash.com/photos/c_5AI-gE7YY',
      download: 'https://unsplash.com/photos/c_5AI-gE7YY/download',
      download_location: 'https://api.unsplash.com/photos/c_5AI-gE7YY/download',
    },
    categories: [],
    likes: 5,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'qvghZd64Lhw',
      updated_at: '2020-10-23T14:45:01-04:00',
      username: 'happyfaceemoji',
      name: 'H.F.E & CO',
      first_name: 'H.F.E & CO',
      last_name: null,
      twitter_username: null,
      portfolio_url: 'https://www.hfeandco.com/prints',
      bio:
        'Fashion & Beauty Photographer from Vancouver, B.C \r\nInstagram: @_happyfaceemoji',
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/happyfaceemoji',
        html: 'https://unsplash.com/@happyfaceemoji',
        photos: 'https://api.unsplash.com/users/happyfaceemoji/photos',
        likes: 'https://api.unsplash.com/users/happyfaceemoji/likes',
        portfolio: 'https://api.unsplash.com/users/happyfaceemoji/portfolio',
        following: 'https://api.unsplash.com/users/happyfaceemoji/following',
        followers: 'https://api.unsplash.com/users/happyfaceemoji/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1599969857988-22bba28370e7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1599969857988-22bba28370e7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1599969857988-22bba28370e7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: '_happyfaceemoji',
      total_collections: 0,
      total_likes: 0,
      total_photos: 217,
      accepted_tos: true,
    },
  },
  {
    id: 'rUt2MOR70xg',
    created_at: '2020-10-22T17:03:25-04:00',
    updated_at: '2020-10-23T14:39:01-04:00',
    promoted_at: '2020-10-23T14:39:01-04:00',
    width: 2921,
    height: 3651,
    color: '#DFD7CC',
    blur_hash: 'L3Ac}F~q0#nOPBs,=wXSHrNG9us9',
    description: null,
    alt_description: 'person holding gray and black robot toy',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603400520895-ead2fe027d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603400520895-ead2fe027d53?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603400520895-ead2fe027d53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603400520895-ead2fe027d53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603400520895-ead2fe027d53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/rUt2MOR70xg',
      html: 'https://unsplash.com/photos/rUt2MOR70xg',
      download: 'https://unsplash.com/photos/rUt2MOR70xg/download',
      download_location: 'https://api.unsplash.com/photos/rUt2MOR70xg/download',
    },
    categories: [],
    likes: 9,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'F7HBxTI4lMc',
      updated_at: '2020-10-23T15:29:39-04:00',
      username: 'thombradley',
      name: 'Thom Bradley',
      first_name: 'Thom',
      last_name: 'Bradley',
      twitter_username: 'thombradley_',
      portfolio_url: 'https://thombradley.ca',
      bio:
        'Toronto based photographer and film maker. If you want to work together find me on socials @thombradley_ or email me at thombradleyphotos@gmail.com',
      location: 'Toronto',
      links: {
        self: 'https://api.unsplash.com/users/thombradley',
        html: 'https://unsplash.com/@thombradley',
        photos: 'https://api.unsplash.com/users/thombradley/photos',
        likes: 'https://api.unsplash.com/users/thombradley/likes',
        portfolio: 'https://api.unsplash.com/users/thombradley/portfolio',
        following: 'https://api.unsplash.com/users/thombradley/following',
        followers: 'https://api.unsplash.com/users/thombradley/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1588704999444-1b832088da38image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1588704999444-1b832088da38image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1588704999444-1b832088da38image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'thombradley_',
      total_collections: 0,
      total_likes: 0,
      total_photos: 73,
      accepted_tos: true,
    },
  },
  {
    id: 'iIvWtDjEoZI',
    created_at: '2020-10-23T06:33:34-04:00',
    updated_at: '2020-10-23T14:36:01-04:00',
    promoted_at: '2020-10-23T14:36:01-04:00',
    width: 4435,
    height: 5544,
    color: '#FEF8EA',
    blur_hash: 'L-IOa_xuWWoe~qWVR+of%MM{WBj]',
    description: null,
    alt_description: null,
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603449138643-579efc34b565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603449138643-579efc34b565?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603449138643-579efc34b565?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603449138643-579efc34b565?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603449138643-579efc34b565?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/iIvWtDjEoZI',
      html: 'https://unsplash.com/photos/iIvWtDjEoZI',
      download: 'https://unsplash.com/photos/iIvWtDjEoZI/download',
      download_location: 'https://api.unsplash.com/photos/iIvWtDjEoZI/download',
    },
    categories: [],
    likes: 9,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'casng55dono',
      updated_at: '2020-10-23T15:29:41-04:00',
      username: 'tanelah',
      name: 'Taneli Lahtinen',
      first_name: 'Taneli',
      last_name: 'Lahtinen',
      twitter_username: null,
      portfolio_url: 'http://www.tanelilahtinen.fi',
      bio:
        'paypal.me/tanelah  •  lahtinen.taneli@gmail.com  •  instagr.am/tanelah',
      location: 'Helsinki',
      links: {
        self: 'https://api.unsplash.com/users/tanelah',
        html: 'https://unsplash.com/@tanelah',
        photos: 'https://api.unsplash.com/users/tanelah/photos',
        likes: 'https://api.unsplash.com/users/tanelah/likes',
        portfolio: 'https://api.unsplash.com/users/tanelah/portfolio',
        following: 'https://api.unsplash.com/users/tanelah/following',
        followers: 'https://api.unsplash.com/users/tanelah/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1532583168283-384dc89bf7f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1532583168283-384dc89bf7f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1532583168283-384dc89bf7f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'tanelah',
      total_collections: 0,
      total_likes: 53,
      total_photos: 155,
      accepted_tos: true,
    },
  },
  {
    id: 'SZ3l-NZdbyw',
    created_at: '2020-10-22T16:51:42-04:00',
    updated_at: '2020-10-23T14:33:01-04:00',
    promoted_at: '2020-10-23T14:33:01-04:00',
    width: 4000,
    height: 6000,
    color: '#F6F8F7',
    blur_hash: 'LAA,%px]M{4TtlIUozRP4.M{%2x[',
    description: null,
    alt_description:
      'person in black jacket and orange jack o lantern hat sitting on tree during daytime',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603399880211-fab0a3d3cdae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603399880211-fab0a3d3cdae?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603399880211-fab0a3d3cdae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603399880211-fab0a3d3cdae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603399880211-fab0a3d3cdae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/SZ3l-NZdbyw',
      html: 'https://unsplash.com/photos/SZ3l-NZdbyw',
      download: 'https://unsplash.com/photos/SZ3l-NZdbyw/download',
      download_location: 'https://api.unsplash.com/photos/SZ3l-NZdbyw/download',
    },
    categories: [],
    likes: 9,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'jqwNrd8K_Z4',
      updated_at: '2020-10-23T15:29:38-04:00',
      username: 'austin__ramsey',
      name: 'Austin Ramsey',
      first_name: 'Austin',
      last_name: 'Ramsey',
      twitter_username: null,
      portfolio_url: 'http://austinramsey.net',
      bio: null,
      location: 'Ruston LA',
      links: {
        self: 'https://api.unsplash.com/users/austin__ramsey',
        html: 'https://unsplash.com/@austin__ramsey',
        photos: 'https://api.unsplash.com/users/austin__ramsey/photos',
        likes: 'https://api.unsplash.com/users/austin__ramsey/likes',
        portfolio: 'https://api.unsplash.com/users/austin__ramsey/portfolio',
        following: 'https://api.unsplash.com/users/austin__ramsey/following',
        followers: 'https://api.unsplash.com/users/austin__ramsey/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'austin__ramsey',
      total_collections: 0,
      total_likes: 0,
      total_photos: 26,
      accepted_tos: true,
    },
  },
  {
    id: 'FO5MtCdRQII',
    created_at: '2020-10-23T08:43:32-04:00',
    updated_at: '2020-10-23T14:30:01-04:00',
    promoted_at: '2020-10-23T14:30:01-04:00',
    width: 4070,
    height: 2795,
    color: '#F9E5DA',
    blur_hash: 'LkHLPQwbIAt7~V$%V@V@?HsmRPof',
    description: null,
    alt_description:
      'man in blue denim jacket standing on top of building during daytime',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1603456511609-5c5a926a1d6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      full:
        'https://images.unsplash.com/photo-1603456511609-5c5a926a1d6a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      regular:
        'https://images.unsplash.com/photo-1603456511609-5c5a926a1d6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      small:
        'https://images.unsplash.com/photo-1603456511609-5c5a926a1d6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
      thumb:
        'https://images.unsplash.com/photo-1603456511609-5c5a926a1d6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
    },
    links: {
      self: 'https://api.unsplash.com/photos/FO5MtCdRQII',
      html: 'https://unsplash.com/photos/FO5MtCdRQII',
      download: 'https://unsplash.com/photos/FO5MtCdRQII/download',
      download_location: 'https://api.unsplash.com/photos/FO5MtCdRQII/download',
    },
    categories: [],
    likes: 1,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    user: {
      id: 'x4H3qXxDFLk',
      updated_at: '2020-10-23T15:09:37-04:00',
      username: 'akaunas',
      name: 'Alexander Kaunas',
      first_name: 'Alexander',
      last_name: 'Kaunas',
      twitter_username: null,
      portfolio_url: 'http://balans.studio',
      bio:
        'IG: oldbalans\r\nPhotographer and film director, who dared to change office life in Russia into life of freelance photographer in China 7 years ago',
      location: 'Shanghai',
      links: {
        self: 'https://api.unsplash.com/users/akaunas',
        html: 'https://unsplash.com/@akaunas',
        photos: 'https://api.unsplash.com/users/akaunas/photos',
        likes: 'https://api.unsplash.com/users/akaunas/likes',
        portfolio: 'https://api.unsplash.com/users/akaunas/portfolio',
        following: 'https://api.unsplash.com/users/akaunas/following',
        followers: 'https://api.unsplash.com/users/akaunas/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1580661992475-5daab5205f87image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1580661992475-5daab5205f87image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1580661992475-5daab5205f87image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'oldbalans',
      total_collections: 0,
      total_likes: 10,
      total_photos: 78,
      accepted_tos: true,
    },
  },
];
