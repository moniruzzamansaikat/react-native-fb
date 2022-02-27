import { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Avatar, Button, Card } from 'react-native-elements';
import { useAuth } from '../../hooks/useAuth';
import ScreenContainer from '../../components/shared/ScreenContainer';

const Profile = () => {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);

  return (
    <ScreenContainer>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            size={80}
            rounded
            source={{
              uri: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/274104679_493964785661591_2061160777323973907_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHgbA7SnfucsJT0KIZuxwTpplI2oO0vRbGmUjag7S9FsShv_11qKmvNLSzzzHxSE-qLXDpC3R_gZHGJPz5yotud&_nc_ohc=DuxRqXv1cEUAX_C0Q37&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-S5tbY206q-0lzqsB729CGAFlo79SRNkrAkhWSy1vhcA&oe=62201AAC',
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Moniruzzaman Saikat
            </Text>
            <Button title="Logout" onPress={logout} />
          </View>
        </View>
      </Card>
    </ScreenContainer>
  );
};

export default Profile;
