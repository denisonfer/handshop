import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 36,
    borderRadius: 8,
    backgroundColor: '#e6ebf2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6ebf2',
    borderRadius: 100,
  },
});
