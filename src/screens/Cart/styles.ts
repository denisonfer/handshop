import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 24,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#e6ebf2',
    justifyContent: 'space-between',
    height: 65,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 60,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  amountContainer: {
    backgroundColor: 'green',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  amountTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});
